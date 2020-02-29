import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Project from './Project.js';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
import { mockingData as paragraphStoriesMockingData } from './../Paragraph/Paragraph.stories.js';
export const mockingData = {
    componentName: "Project",
    Component: Project,
    stories: [{
        data: {
            projectName: "Clubber",
            categories: ["Web"],
            languages: ["Java", "PHP", "CSS"],
            technologies: ["HTML5", "CSS", "JS", "PHP", "My SQL"],
            teamMembers: ["Nico", "Jonas"],
            startDate: "01.01.1919",
            endDate: "02.02.1091",
            gitRepoLink: "https://google.com",
            paragraphs: paragraphStoriesMockingData.stories
        }
    }, {
        data: {
            projectName: "Clubber",
            categories: ["Web"],
            languages: ["Java", "PHP", "CSS"],
            technologies: ["HTML5", "CSS", "JS", "PHP", "My SQL"],
            teamMembers: ["Nico", "Jonas"],
            startDate: "01.01.1919",
            endDate: "02.02.1091",
            gitRepoLink: "https://google.com",
            paragraphs: paragraphStoriesMockingData.stories
        },
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))