import React, { Component, Fragment } from 'react';
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
import Header from '../../components/Header';
import ProjectNavigation from '../../components/ProjectNavigation';

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
            <Fragment>
                <Header />
                <main>
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

}

export default Projects;