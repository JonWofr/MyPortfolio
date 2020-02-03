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
    gitRepoLink: "https://google.com",
    paragraphs: paragraphs
}

storiesOf("Project", module).add("Default", () => {
    const { projectName, categories, technologies, teamMembers, startDate, endDate, gitRepoLink, paragraphs } = mockingData;
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
