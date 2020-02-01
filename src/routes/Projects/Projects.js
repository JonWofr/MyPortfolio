import React, { Component } from 'react';

// Components
import Project from '../../components/Project';

// Utils
import * as http from '../../utils/http';
import { parseDocumentsToProjects } from '../../utils/parser';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            lastPage: 1,
            limit: 5,

            projects: []
        }
    }

    componentDidMount = () => this.fetchProjects;

    fetchProjects = () => {
        const { page, limit } = this.state;
        const data = {
            page,
            limit
        }
        http.get(`${process.env.REACT_APP_BACKEND_URL}/projects`, data)
            .then(res => {
                const { documents, lastPage } = res;
                const projects = parseDocumentsToProjects(documents);
                this.setState({
                    lastPage,
                    projects
                });
            });
    }
    render = () => {
        const { projects } = this.state;
        const keys = Object.keys(projects);
        return (
            <div>
                {keys && keys.length > 0 &&
                    keys.map((key) => {
                        const { _id, projectName, categories, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs } = projects[key];
                        const data = {
                            projectName,
                            categories,
                            technologies,
                            teamMembers,
                            startDate,
                            endDate,
                            gitRepoLink,
                            paragraphs
                        }
                        console.log(data);
                        return (
                            <div key={_id}>
                                <div>
                                    <Project data={data} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Projects;