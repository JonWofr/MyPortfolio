import React from 'react';
import { storiesOf } from '@storybook/react';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// Components 
import Input from './Input.js';

// Mocking data
const mockingData = {
    componentName: "Input",
    Component: Input,
    stories: [{
        type: "text",
        placeholder: "testing-placeholder",
        size: "large",
        required: true
    }, {
        type: "text",
        size: "medium",
        value: "hallo",
        required: true
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))