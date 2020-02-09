import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational components
import ParagraphsWindow from './ParagraphsWindow.js';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
import { mockingData as paragraphStoriesMockingData } from './../Paragraph/Paragraph.stories.js';

export const mockingData = {
    componentName: "ParagraphsWindow",
    Component: ParagraphsWindow,
    stories: [{
        paragraphs: paragraphStoriesMockingData.stories,
        onChangeValue: () => console.log("Changed value"),
        onClickAddNewParagraph: () => console.log("Adding new paragraph"),
        onClickRemoveParagraph: () => console.log("Removing old paragraph"),
        isEditable: true
    }, {
        paragraphs: paragraphStoriesMockingData.stories,
        onChangeValue: () => console.log("Changed value"),
        onClickAddNewParagraph: () => console.log("Adding new paragraph"),
        onClickRemoveParagraph: () => console.log("Removing old paragraph"),
        isEditable: true,
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <div style={{ width: "500px", position: "absolute", left: "50vw", transform: "translate(-50%, 0)" }}>
        <mockingData.Component {...story} />
    </div>
)))