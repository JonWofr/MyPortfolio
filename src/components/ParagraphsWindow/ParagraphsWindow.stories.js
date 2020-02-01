import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational components
import ParagraphsWindow from './ParagraphsWindow.js';

// Mocking data
import { paragraphs } from './../Paragraph/Paragraph.stories.js';


storiesOf("ParagraphsWindow", module)
    .add("2 Paragraphs", () => (
        <div style={{width: "500px", position: "absolute", left: "50vw", transform: "translate(-50%, 0)"}}>
            <ParagraphsWindow
                paragraphs={paragraphs}
                onChangeValue={() => console.log("Changed value")}
                onClickAddNewParagraph={() => console.log("Adding new paragraph")}
                onClickRemoveParagraph={() => console.log("Removing old paragraph")}
                isEditable={true}
            />
        </div>
    ))