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

    componentDidMount = () => {
        this.fetchProjects()
            .then(({ data }) => {
                const projects = parser.parseDocumentsToProjects(data);
                this.setState({
                    page: 1,
                    limit: 5,
                    projects
                })
            })
    }

    fetchProjects = async (query, page = 1, limit = 5) => {
        const queryObject = {
            query,
            page,
            limit
        }

        const queryString = parser.parseObjectToQueryString(queryObject);

        const { response } = await http.get(`${process.env.REACT_APP_BACKEND_URL}/projects${queryString}`);

        return response;
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


    onClickPaginationPage = page => {
        const { limit } = this.state;
        this.fetchProjects(page, limit);
    }

    onChangeSearchFieldValue = ({ target: { value } }) => {
        this.setState({
            searchFieldValue: value
        })
    }

    onChangeFilterCheckbox = (name, value, isChecked) => {
        const { filters } = this.state;

        const deepClonedFilters = cloneDeep(filters);

        const affectedFilter = deepClonedFilters.find(deepClonedFilter => deepClonedFilter.name === name);
        const affectedListItem = affectedFilter.listItems.find(listItem => listItem.value === value);
        affectedListItem.isChecked
            ? this.decrementCheckedCheckboxesCount(affectedFilter)
            : this.incrementCheckedCheckboxesCount(affectedFilter);
        affectedListItem.isChecked = isChecked;

        const mongoDbQueryObject = parser.parseFiltersToMongoDbQueryObject(deepClonedFilters);

        this.fetchProjects(mongoDbQueryObject)
            .then(({ data }) => {
                const projects = parser.parseDocumentsToProjects(data);
                this.setState({
                    projects,
                    filters: deepClonedFilters
                })
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

        this.fetchProjects()
            .then(({ data }) => this.setState({
                projects: data,
                filters: deepClonedFilters
            }))
    }
}

export default Projects;