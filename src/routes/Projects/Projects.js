import React, { Component, Fragment } from 'react';
import { cloneDeep } from 'lodash';
import { withRouter } from 'react-router-dom';

// Utils
import * as http from '../../utils/http';
import * as parser from '../../utils/parser';
import * as intersectionObserver from '../../utils/intersectionObserver';

// Styles
import styles from './Projects.module.scss';

// Components
import Project from '../../components/Project';
import CustomHeader from '../../components/CustomHeader';
import FiltersBar from '../../components/FiltersBar';
import Spinner from '../../components/Spinner';
import Heading from '../../components/Heading';

// FormElementDefinitions
import * as models from '../../models/formElementDefinitions';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: undefined,
            lastPage: undefined,
            projects: {},
            filters: parser.parseFormElementDefinitionsToFilters(models.projectsOverviewFormElementDefinitions),
            searchFieldValue: "",
            isInitiallyFetchingData: true,
            isFurtherFetchingData: false,
            totalAppliedFiltersCount: 0,
            totalDocumentsMatchingFiltersCount: 0
        }

        this.debouncerTimeoutId = undefined;

        this.fetchingProjectsObserver = undefined;
        this.fadingInElementsObserver = undefined;
    }

    render() {
        const { projects, filters, searchFieldValue, isInitiallyFetchingData, isFurtherFetchingData, totalAppliedFiltersCount, totalDocumentsMatchingFiltersCount } = this.state;

        const projectIds = Object.keys(projects);

        return (
            <Fragment>
                <CustomHeader />
                <main className={styles.customSize}>
                    <input id={styles.menuToggle} type="checkbox" />
                    <label id={styles.mobileFilterButton} htmlFor={styles.menuToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M11 18h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1zm4 6h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z" />
                        </svg>
                        {totalAppliedFiltersCount > 0 &&
                            <div className={styles.totalAppliedFiltersCount}>
                                {totalAppliedFiltersCount}
                            </div>
                        }
                    </label>
                    <div className={styles.filtersBarOuterContainer}>
                        <div className={styles.filtersBarInnerContainer}>
                            <FiltersBar
                                filters={filters}
                                onChangeCheckbox={this.onChangeFilterCheckbox}
                                searchFieldValue={searchFieldValue}
                                onChangeSearchFieldValue={this.onChangeSearchFieldValue}
                                onClickSearchFieldResetButton={this.onClickSearchFieldResetButton}
                                onClickClearFiltersButton={this.onClickClearFiltersButton}
                                totalAppliedFiltersCount={totalAppliedFiltersCount}
                            />
                        </div>
                    </div>
                    {isInitiallyFetchingData &&
                        <div className={`${styles.spinnerContainer} ${styles.centered}`}>
                            <Spinner colorMode="dark" />
                        </div>
                    }
                    <div className={styles.totalDocumentsMatchingFiltersCountOuterContainer}>
                        <div className={styles.totalDocumentsMatchingFiltersCountInnerContainer}>
                            {totalDocumentsMatchingFiltersCount} Projekt{totalDocumentsMatchingFiltersCount !== 1 ? "e" : ""} insgesamt
                        </div>
                    </div>
                    {projectIds.length === 0 && !isInitiallyFetchingData &&
                        <div className={styles.noResultsFoundHeadingContainer}>
                            <Heading type="secondary" colorMode="dark">
                                Für die ausgewählten Filter konnten keine Projekte gefunden werden!
                            </Heading>
                        </div>
                    }
                    {projectIds.length > 0 &&
                        <div className={styles.projectsContainer}>
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
                    }
                    {isFurtherFetchingData &&
                        <div className={`${styles.spinnerContainer} ${styles.bottom}`}>
                            <Spinner colorMode="dark" />
                        </div>
                    }
                </main>
            </Fragment>
        );
    }

    componentDidMount = () => {
        const { filters } = this.state;
        const { location } = this.props;

        let queryObject = {};

        if (location.search !== "") {
            queryObject = parser.parseQueryStringToObject(location.search.replace(/%22/g, "\""));
            if ("query" in queryObject) {
                const deepClonedFilters = cloneDeep(filters);
                const [updatedDeepClonedFilters, searchFieldValue] = parser.parseMongoDbQueryObjectToFiltersAndSearchFieldValue(deepClonedFilters, queryObject.query);
                let totalAppliedFiltersCount = 0;
                updatedDeepClonedFilters.forEach(updatedDeepClonedFilter => totalAppliedFiltersCount += updatedDeepClonedFilter.checkedCheckboxesCount);
                if (searchFieldValue !== "") totalAppliedFiltersCount++;
                this.setState({
                    filters: updatedDeepClonedFilters,
                    searchFieldValue,
                    totalAppliedFiltersCount
                })
            }
        }

        this.fetchingProjectsObserver = intersectionObserver.getIntersectionObserver(() => {
            const { page } = this.state;
            queryObject.page = page + 1;

            this.setState({ isFurtherFetchingData: true }, () => this.fetchProjects(queryObject))
        });

        this.fadingInElementsObserver = intersectionObserver.getIntersectionObserver(target => target.classList.add("fade-in"));

        this.setState({ isInitiallyFetchingData: true }, () => this.fetchProjects(queryObject))
    }

    fetchProjects = async (queryObject) => {
        const { projects, isInitiallyFetchingData } = this.state;

        let queryStringWithoutPagination = "";

        const fullQueryString = parser.parseObjectToQueryString(queryObject);

        if ("page" in queryObject) {
            delete queryObject.page;
            queryStringWithoutPagination = parser.parseObjectToQueryString(queryObject);
        }
        else {
            queryStringWithoutPagination = fullQueryString;
        }

        this.updateBrowserAddressBarUrl(`/projects${queryStringWithoutPagination}`);

        const { response: { data, appendix: { page, lastPage, documentsCount: totalDocumentsMatchingFiltersCount } } } = await http.get(`${process.env.REACT_APP_BACKEND_URL}/projects${fullQueryString}`);

        const newProjects = parser.parseDocumentsToProjects(data);

        this.setState({
            page,
            lastPage,
            totalDocumentsMatchingFiltersCount,
            projects: isInitiallyFetchingData ? newProjects : {
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

    updateBrowserAddressBarUrl = (path) => {
        const { history } = this.props;

        history.replace(path, null);
    }

    onChangeSearchFieldValue = ({ target: { value } }) => {
        const { filters, searchFieldValue, totalAppliedFiltersCount } = this.state;

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
            this.setState({
                isFurtherFetchingData: true
            }, () => this.fetchProjects(queryObject))
        }, {});

        this.debounce(() => {
            this.setState({
                isInitiallyFetchingData: true
            }, () => this.fetchProjects(queryObject))
        }, 500)

        if (searchFieldValue.length === 0 && value.length === 1) {
            this.setState({
                totalAppliedFiltersCount: totalAppliedFiltersCount + 1
            })
        }
        else if (searchFieldValue.length > 0 && value.length === 0) {
            this.setState({
                totalAppliedFiltersCount: totalAppliedFiltersCount - 1
            })
        }

        this.setState({
            searchFieldValue: value
        })
    }

    debounce = (timeoutCallback, ms) => {
        if (this.debouncerTimeoutId) clearTimeout(this.debouncerTimeoutId);
        this.debouncerTimeoutId = setTimeout(timeoutCallback, ms);
    }

    onClickSearchFieldResetButton = () => {
        const { filters, totalAppliedFiltersCount } = this.state;

        const query = parser.parseFiltersAndSearchFieldValueToMongoDbQueryObject(filters, "");

        const queryObject = {
            query
        }

        this.fetchingProjectsObserver = intersectionObserver.getIntersectionObserver(async () => {
            const { page } = this.state;
            const queryObject = {
                page: page + 1,
                query
            }
            this.setState({
                isFurtherFetchingData: true
            }, () => this.fetchProjects(queryObject))
        }, {});

        this.setState({
            searchFieldValue: "",
            totalAppliedFiltersCount: totalAppliedFiltersCount - 1,
            isInitiallyFetchingData: true
        }, () => this.fetchProjects(queryObject))
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
            this.setState({
                isFurtherFetchingData: true
            }, () => this.fetchProjects(queryObject))
        }, {});

        this.debounce(() => {
            this.setState({
                isInitiallyFetchingData: true
            }, () => this.fetchProjects(queryObject))
        }, 500)

        this.setState({
            filters: deepClonedFilters
        })
    }

    incrementCheckedCheckboxesCount = filter => {
        const { totalAppliedFiltersCount } = this.state;

        filter.checkedCheckboxesCount++;
        this.setState({
            totalAppliedFiltersCount: totalAppliedFiltersCount + 1
        })
    }

    decrementCheckedCheckboxesCount = filter => {
        const { totalAppliedFiltersCount } = this.state;

        filter.checkedCheckboxesCount--;
        this.setState({
            totalAppliedFiltersCount: totalAppliedFiltersCount - 1
        })
    }

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
            this.setState({
                isFurtherFetchingData: true
            }, () => this.fetchProjects(queryObject))
        }, {});

        this.setState({
            filters: deepClonedFilters,
            searchFieldValue: "",
            isInitiallyFetchingData: true,
            totalAppliedFiltersCount: 0
        }, () => this.fetchProjects({}))
    }
}

export default withRouter(Projects);