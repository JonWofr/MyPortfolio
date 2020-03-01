import React, { Component, Fragment } from 'react';
import { cloneDeep } from 'lodash';

// Utils
import * as http from '../../utils/http';
import * as parser from '../../utils/parser';
import * as intersectionObserver from '../../utils/intersectionObserver';

// Styles
import styles from './Projects.module.scss';

// Components
import Project from '../../components/Project';
import Header from '../../components/Header';
import FiltersBar from '../../components/FiltersBar';
import Spinner from '../../components/Spinner';

// FormElementDefinitions
import * as models from '../../models/formElementDefinitions';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: undefined,
            lastPage: undefined,
            projects: {},
            filters: parser.parseFormElementDefinitionsToFilters(models.projectOverviewFormElementDefinitions),
            searchFieldValue: "",
            isInitiallyFetchingData: true,
            isFurtherFetchingData: false
        }

        this.debouncerTimeoutId = undefined;

        this.fetchingProjectsObserver = undefined;
        this.fadingInElementsObserver = undefined;
    }

    render() {
        const { projects, filters, searchFieldValue, isInitiallyFetchingData, isFurtherFetchingData } = this.state;

        const projectIds = Object.keys(projects);

        return (
            <Fragment>
                <Header />
                <main>
                    <div className={styles.filtersBarOuterContainer}>
                        <div className={styles.filtersBarInnerContainer}>
                            <FiltersBar
                                filters={filters}
                                onChangeCheckbox={this.onChangeFilterCheckbox}
                                searchFieldValue={searchFieldValue}
                                onChangeSearchFieldValue={this.onChangeSearchFieldValue}
                                onClickClearFiltersButton={this.onClickClearFiltersButton}
                            />
                        </div>
                    </div>
                    {isInitiallyFetchingData &&
                        <div className={`${styles.spinnerContainer} ${styles.centered}`}>
                            <Spinner />
                        </div>
                    }
                    {!isInitiallyFetchingData &&
                        <Fragment>
                            <div className={`${styles.projectsContainer} projectsOberserverItemsParent`}>
                                {
                                    projectIds.map((projectId, projectIdIndex) => (
                                        <div key={projectId} className="projectsObserverItem">
                                            <Project
                                                data={projects[projectId]}
                                                colorMode={projectIdIndex % 2 === 0 ? "dark" : "light"}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            {isFurtherFetchingData &&
                                <div className={`${styles.spinnerContainer} ${styles.bottom}`}>
                                    <Spinner />
                                </div>
                            }
                        </Fragment>
                    }
                </main>
            </Fragment>
        );
    }

    componentDidMount = () => {

        this.fetchingProjectsObserver = intersectionObserver.getIntersectionObserver(async () => {
            const { page } = this.state;
            const queryObject = {
                page: page + 1,
            }
            this.fetchProjects(queryObject);
            this.setState({
                isFurtherFetchingData: true
            })
        }, {});

        const fadingInElementsObserverOptions = {
            rootMargin: "150px 0px"
        }

        this.fadingInElementsObserver = intersectionObserver.getIntersectionObserver(target => {
            console.info("Is Intersecting", target);
            target.classList.add("fade-in");
        }, fadingInElementsObserverOptions);

        this.fetchProjects();
        this.setState({
            isInitiallyFetchingData: true
        })
    }

    fetchProjects = async (queryObject) => {
        const { projects } = this.state;

        const queryString = queryObject ? parser.parseObjectToQueryString(queryObject) : "";
        const { response: { data, appendix: { page, lastPage } } } = await http.get(`${process.env.REACT_APP_BACKEND_URL}/projects${queryString}`);

        const newProjects = parser.parseDocumentsToProjects(data);

        this.setState({
            page,
            lastPage,
            projects: {
                ...projects,
                ...newProjects
            },
            isInitiallyFetchingData: false,
            isFurtherFetchingData: false
        }, () => {
            this.observeLastProject();
            this.observeFadingInElements();
        });
    }

    observeLastProject = () => {
        const { page, lastPage } = this.state;
        if (page !== lastPage) {
            const lastProject = document.querySelector(`.projectsObserverItem:last-child`);
            if (lastProject !== null) this.fetchingProjectsObserver.observe(lastProject);
        }
    }

    observeFadingInElements = () => {
        const fadingInElements = document.querySelectorAll(".fade");
        fadingInElements.forEach(fadingInElement => this.fadingInElementsObserver.observe(fadingInElement));
    }

    onChangeSearchFieldValue = ({ target: { value } }) => {
        const { filters } = this.state;

        const query = parser.parseFiltersAndSearchFieldValueToMongoDbQueryObject(filters, value);

        const queryObject = {
            query
        }

        this.fetchingProjectsObserver = intersectionObserver.getIntersectionObserver(async () => {
            const { page } = this.state;
            const queryObject = {
                page: page + 1,
                query
            }
            this.fetchProjects(queryObject);
            this.setState({
                isFurtherFetchingData: true
            })
        }, {});

        this.debounce(() => {
            this.fetchProjects(queryObject);
            this.setState({
                isInitiallyFetchingData: true
            })
        }, 500)

        this.setState({
            searchFieldValue: value
        })
    }

    debounce = (timeoutCallback, ms) => {
        if (this.debouncerTimeoutId) clearTimeout(this.debouncerTimeoutId);
        this.debouncerTimeoutId = setTimeout(timeoutCallback, ms);
    }

    onChangeFilterCheckbox = (name, value, isChecked) => {
        const { filters, searchFieldValue } = this.state;

        const deepClonedFilters = cloneDeep(filters);

        const affectedFilter = deepClonedFilters.find(deepClonedFilter => deepClonedFilter.name === name);
        const affectedListItem = affectedFilter.listItems.find(listItem => listItem.value === value);
        affectedListItem.isChecked
            ? this.decrementCheckedCheckboxesCount(affectedFilter)
            : this.incrementCheckedCheckboxesCount(affectedFilter);
        affectedListItem.isChecked = isChecked;

        const query = parser.parseFiltersAndSearchFieldValueToMongoDbQueryObject(deepClonedFilters, searchFieldValue);

        const queryObject = {
            query
        }

        this.fetchingProjectsObserver = intersectionObserver.getIntersectionObserver(async () => {
            const { page } = this.state;
            const queryObject = {
                page: page + 1,
                query
            }
            this.fetchProjects(queryObject);
            this.setState({
                isFurtherFetchingData: true
            })
        }, {});

        this.debounce(() => {
            this.fetchProjects(queryObject);
            this.setState({
                isInitiallyFetchingData: true
            })
        }, 500)

        this.setState({
            filters: deepClonedFilters
        })
    }

    incrementCheckedCheckboxesCount = (filter) => filter.checkedCheckboxesCount++;

    decrementCheckedCheckboxesCount = (filter) => filter.checkedCheckboxesCount--;

    onClickClearFiltersButton = () => {
        const { filters } = this.state;

        const deepClonedFilters = cloneDeep(filters);

        deepClonedFilters.forEach(deepClonedFilter => {
            deepClonedFilter.checkedCheckboxesCount = 0;
            deepClonedFilter.listItems.forEach(listItem => listItem.isChecked = false)
        });

        if (this.debouncerTimeoutId) clearTimeout(this.debouncerTimeoutId);

        this.fetchingProjectsObserver = intersectionObserver.getIntersectionObserver(async () => {
            const { page } = this.state;
            const queryObject = {
                page: page + 1,
            }
            this.fetchProjects(queryObject);
            this.setState({
                isFurtherFetchingData: true
            })
        }, {});

        this.fetchProjects();
        this.setState({
            filters: deepClonedFilters,
            searchFieldValue: "",
            isInitiallyFetchingData: true
        })
    }
}

export default Projects;