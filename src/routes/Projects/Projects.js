import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Utils
import * as http from '../../utils/http';
import * as parser from '../../utils/parser';

// Styles
import styles from './Projects.module.scss';

// Components
import Heading from '../../components/Heading';
import Project from '../../components/Project';
import Pagination from '../../components/Pagination';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: undefined,
            limit: undefined,
            lastPage: undefined,
            projects: []
        }
    }

    componentDidMount = () => {
        this.fetchProjects();
    }

    fetchProjects = (page = 1, limit = 5) => {
        const queryObject = {
            page,
            limit
        }

        http.get(`${process.env.REACT_APP_BACKEND_URL}/projects`, queryObject)
            .then(({ response }) => {
                const { data, appendix: { lastPage } } = response;

                const projects = parser.parseDocumentsToProjects(data);
                this.setState({
                    page,
                    limit,
                    lastPage,
                    projects
                });
            })
    }

    render() {
        const { page, lastPage, projects } = this.state;

        const projectIds = Object.keys(projects);

        return (
            <div id={styles.projects}>
                <Heading type="primary">
                    Projects
                </Heading>
                {
                    projectIds.map((projectId, projectIdIndex) => {
                        const { projectName, categories, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs } = projects[projectId];
                        return (
                            <Project
                                projectName={projectName}
                                categories={categories}
                                technologies={technologies}
                                teamMembers={teamMembers}
                                startDate={startDate}
                                endDate={endDate}
                                gitRepoLink={gitRepoLink}
                                paragraphs={paragraphs}
                            />
                        )
                    })
                }
                <Pagination
                    page={page}
                    lastPage={lastPage}
                    onClickPage={this.onClickPaginationPage}
                />
            </div>
        );
    }


    onClickPaginationPage = page => {
        const { limit } = this.state;
        this.fetchProjects(page, limit);
    }

}

export default Projects;