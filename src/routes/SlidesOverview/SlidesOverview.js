import React, { Component, Fragment } from 'react';
import { cloneDeep } from 'lodash';

// Components
import Toast from '../../components/Toast';
import Pagination from '../../components/Pagination';
import TableRow from '../../components/TableRow';
import CustomHeader from '../../components/CustomHeader';
import Heading from '../../components/Heading';

// Utils
import * as http from '../../utils/http';
import * as parser from '../../utils/parser';
import { getHttpToast } from '../../utils/toast';

// Models
import { slidesOverviewFormElementsDefinitions as formElementDefinitions } from '../../models/formElementDefinitions';

// Styles
import styles from './SlidesOverview.module.scss';

const initialNewSlide = {
    title: "",
    subtitle: "",
    colorMode: "",
    projectName: "",
    image: {
        url: undefined
    }
}

class SlidesOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: undefined,
            lastPage: undefined,
            limit: undefined,

            slides: [],
            editableSlideId: undefined,

            toasts: [],

            newSlide: {
                title: "",
                subtitle: "",
                colorMode: "",
                projectName: "",
                image: {
                    url: undefined
                }
            }
        }
    }

    componentDidMount = () => this.fetchSlides();


    render = () => {
        const { toasts, page, lastPage } = this.state;
        return (
            <Fragment>
                <CustomHeader />
                <main>
                    <div id={styles.slidesOverview}>
                        {toasts.length > 0 &&
                            toasts.map((toast, index) => {
                                const { type, title, description } = toast;
                                return (
                                    <Toast
                                        key={index}
                                        type={type}
                                        title={title}
                                        description={description}
                                        colorMode="dark"
                                    />
                                )
                            })
                        }
                        <Heading type="primary" colorMode="dark">
                            Slides-formular
                        </Heading>
                        <table>
                            {this.renderTableBody()}
                            {this.renderTableFoot()}
                        </table>
                        {page && lastPage &&
                            <div id={styles.paginationContainer}>
                                <Pagination
                                    page={page}
                                    lastPage={lastPage}
                                    onClickPage={this.onClickPaginationPage}
                                    colorMode="dark"
                                />
                            </div>
                        }
                    </div>
                </main>
            </Fragment>
        )
    }

    fetchSlides = (page = 1, limit = 5) => {
        const queryObject = {
            page,
            limit
        }

        const queryString = parser.parseObjectToQueryString(queryObject)

        http.get(`${process.env.REACT_APP_BACKEND_URL}/slides${queryString}`)
            .then(({ status, statusText, response }) => {
                const { data, appendix: { lastPage } } = response;

                this.triggerHttpToast(status, statusText);

                const slides = parser.parseDocumentsToProjects(data);
                this.setState({
                    page,
                    limit,
                    lastPage,
                    slides
                });
            })
            .catch(({ status, statusText }) => {
                this.triggerHttpToast(status, statusText);
            })
    }

    triggerHttpToast = (status, statusText) => {
        const toast = getHttpToast(status, statusText);

        this.showHttpToast(toast);
        this.hideHttpToastAfter(5000, toast);
    }

    showHttpToast = (toast) => {
        const { toasts } = this.state;

        const deepClonedToasts = cloneDeep(toasts);
        deepClonedToasts.push(toast);

        this.setState({
            toasts: deepClonedToasts
        })
    }

    hideHttpToastAfter = (ms, toast) => setTimeout(() => {
        const { toasts } = this.state;

        let deepClonedToasts = cloneDeep(toasts);
        deepClonedToasts = deepClonedToasts.filter(deepClonedToast => deepClonedToast.timestamp !== toast.timestamp);

        this.setState({
            toasts: deepClonedToasts
        })
    }, ms);

    renderTableBody = () => {
        const { slides, editableSlideId } = this.state;
        const slideIds = Object.keys(slides);
        return (
            <tbody>
                {slideIds && slideIds.length > 0 &&
                    slideIds.map((slideId) => {
                        const slide = slides[slideId];
                        return (
                            <TableRow
                                key={slideId}
                                tableRowId={slideId}
                                data={slide}
                                formElementDefinitions={formElementDefinitions}
                                isEditable={slideId === editableSlideId ? true : false}
                                onChangeColumnValue={(propertyName, value) => this.onChangeSlide(slideId, propertyName, value)}
                                onClickDelete={() => this.onClickDelete(slideId)}
                                onClickEdit={() => this.onClickEdit(slideId)}
                                onClickSave={() => this.onClickSave(slideId)}
                                onClickShowParagraphs={() => { }}
                                colorMode="dark"
                            />
                        )
                    })
                }
            </tbody>
        )
    }

    onChangeSlide = async (slideId, propertyName, value) => {
        const { slides } = this.state;

        const deepClonedSlides = cloneDeep(slides);

        if (propertyName === "image") {
            value = await http.postFile(`${process.env.REACT_APP_BACKEND_URL}/images?filename=${value.name}&filetype=${value.type}`, value);
            deepClonedSlides[slideId].image.url = value;
        }
        else {
            deepClonedSlides[slideId][propertyName] = value;
        }


        this.setState({
            slides: deepClonedSlides
        });
    }

    onClickDelete = (slideId) => {
        const { slides, limit } = this.state;

        const body = {
            data: {},
            appendix: {
                limit
            }
        }

        http.remove(`${process.env.REACT_APP_BACKEND_URL}/slides/${slideId}`, body)
            .then(({ status, statusText, response }) => {
                const { appendix: { lastPage } } = response;

                this.triggerHttpToast(status, statusText);

                const deepClonedSlides = cloneDeep(slides);
                delete deepClonedSlides[slideId];
                this.setState({
                    slides: deepClonedSlides,
                    editableSlideId: undefined,
                    lastPage
                })
            })
            .catch(({ status, statusText }) => {
                this.triggerHttpToast(status, statusText);
            })
    }

    onClickEdit = slideId => this.setState({
        editableSlideId: slideId !== this.state.editableSlideId ? slideId : undefined
    })

    onClickSave = slideId => {
        const { slides, limit } = this.state;
        const body = {
            data: slides[slideId],
            appendix: {
                limit
            }
        }
        http.put(`${process.env.REACT_APP_BACKEND_URL}/slides/${slideId}`, body)
            .then(({ status, statusText }) => {
                this.triggerHttpToast(status, statusText);

                this.setState({
                    editableSlideId: undefined
                })
            })
            .catch(({ status, statusText }) => {
                this.triggerHttpToast(status, statusText);
            })
    }

    renderTableFoot = () => {
        const { newSlide } = this.state;

        return (
            <tfoot>
                <TableRow
                    tableRowId="newResource"
                    data={newSlide}
                    formElementDefinitions={formElementDefinitions}
                    isEditable={true}
                    onChangeColumnValue={(propertyName, value) => this.onChangeNewSlide(propertyName, value)}
                    onClickSave={() => this.insertSlide()}
                    onClickShowParagraphs={() => { }}
                    onClickDelete={() => { }}
                    onClickEdit={() => { }}
                    colorMode="dark"
                />
            </tfoot>
        )
    }

    onChangeNewSlide = async (propertyName, value) => {
        const { newSlide } = this.state;

        const deepClonedNewSlide = cloneDeep(newSlide);

        if (propertyName === "url") {
            try {
                const { status, statusText, response : { url } } = await http.postFile(`${process.env.REACT_APP_BACKEND_URL}/images?filename=${value.name}&filetype=${value.type}`, value);
                this.triggerHttpToast(status, statusText);
                value = url;
            }
            catch ({ status, statusText }) {
                this.triggerHttpToast(status, statusText);
            }
        }

        deepClonedNewSlide[propertyName] = value;

        this.setState({
            newSlide: deepClonedNewSlide
        });
    }

    insertSlide = () => {
        const { slides, newSlide, limit } = this.state;
        const body = {
            data: newSlide,
            appendix: {
                limit
            }
        }

        http.post(`${process.env.REACT_APP_BACKEND_URL}/slides`, body)
            .then(({ status, statusText, response }) => {
                const { data: { _id }, appendix: { lastPage } } = response;

                this.triggerHttpToast(status, statusText);

                const deepClonedSlides = cloneDeep(slides);
                deepClonedSlides[_id] = {
                    ...newSlide,
                    _id
                }
                this.setState({
                    slides: deepClonedSlides,
                    newSlide: initialNewSlide,
                    lastPage
                })
            })
            .catch(({ status, statusText }) => {
                this.triggerHttpToast(status, statusText);
            })
    }

    onClickPaginationPage = page => {
        const { limit } = this.state;
        this.fetchSlides(page, limit);
    }
}

export default SlidesOverview;