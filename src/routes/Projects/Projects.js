import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

// Utils
import * as http from '../../utils/http';
import * as parser from '../../utils/parser';

// Styles
import styles from './Projects.module.scss';

// Components
import Project from '../../components/Project';
import Header from '../../components/Header';
import FiltersBar from '../../components/FiltersBar';

// FormElementDefinitions
import * as models from '../../models/formElementDefinitions';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: undefined,
            limit: undefined,
            lastPage: undefined,
            projects: [],
            filters: parser.parseFormElementDefinitionsToFilters(models.projectOverviewFormElementDefinitions),
            searchFieldValue: ""
        }
    }

    render() {
        const { page, lastPage, projects, filters, searchFieldValue } = this.state;

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
                    <div id={styles.projectsContainer}>
                        {
                            projectIds.map((projectId, projectIdIndex) => {
                                const { projectName, categories, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs } = projects[projectId];
                                return (
                                    <div className={styles.projectOuterContainer}>
                                        <div className={styles.projectInnerContainer}>
                                            <Project
                                                projectName={projectName}
                                                categories={categories}
                                                technologies={technologies}
                                                teamMembers={teamMembers}
                                                startDate={startDate}
                                                endDate={endDate}
                                                gitRepoLink={gitRepoLink}
                                                paragraphs={paragraphs}
                                                colorMode={projectIdIndex % 2 === 0 ? "dark" : "light"}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </main>
            </Fragment>
        );
    }

    componentDidMount = () => {
        const queryObject = {
            page: 1,
            limit: 5
        }
        this.fetchProjects(queryObject)
            .then(({ data }) => {
                const projects = parser.parseDocumentsToProjects(data);
                this.setState({
                    page: 1,
                    limit: 5,
                    projects
                })
            })

        this.debouncerTimeoutId = undefined;
    }

    fetchProjects = async (queryObject) => {

        const queryString = queryObject ? parser.parseObjectToQueryString(queryObject) : "";

        const { response } = await http.get(`${process.env.REACT_APP_BACKEND_URL}/projects${queryString}`);

        return response;
    }


    onClickPaginationPage = page => {
        const { limit } = this.state;
        this.fetchProjects(page, limit);
    }

    onChangeSearchFieldValue = ({ target: { value } }) => {
        const { filters } = this.state;

        const queryObject = {
            page: 1,
            limit: 5,
            query: parser.parseFiltersAndSearchFieldValueToMongoDbQueryObject(filters, value)
        }

        this.debounce(async () => {
            const { data } = await this.fetchProjects(queryObject);
            this.setState({
                projects: data
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

        const queryObject =  {
            page: 1,
            limit: 5,
            query: parser.parseFiltersAndSearchFieldValueToMongoDbQueryObject(deepClonedFilters, searchFieldValue)
        }

        this.debounce(async () => {
            const { data } = await this.fetchProjects(queryObject);
            const projects = parser.parseDocumentsToProjects(data);
            this.setState({
                projects,
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

        this.fetchProjects()
            .then(({ data }) => this.setState({
                projects: data,
                filters: deepClonedFilters,
                searchFieldValue: ""
            }))
    }
}

export default Projects;