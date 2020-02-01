import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational Components
import TextArea from './TextArea';

storiesOf("TextArea", module)
    .add("With content", () => (
        <div style={{height: "200px"}}>
            <TextArea
                value="hallo"
                placeholder="With content"
            />
        </div>
    ))
    .add("Without content", () => (
        <div style={{height: "200px"}}>
            <TextArea
                value=""
                placeholder="Without content"
            />
        </div>
    ))