import React from 'react';
import { storiesOf } from '@storybook/react';

//Components
import Project from './Project.js';

//Mocking data 
import { paragraphs } from './../Paragraph/Paragraph.stories.js';

export const mockingData = {
    projectName: "Clubber",
    categories: ["Web"],
    technologies: ["HTML5", "CSS", "JS", "PHP", "My SQL"],
    teamMembers: ["Nico", "Jonas"],
    startDate: "01.01.1919",
    endDate: "02.02.1091",
    paragraphs: paragraphs
}

storiesOf("Project", module).add("Default", () => <Project data={mockingData} />)
