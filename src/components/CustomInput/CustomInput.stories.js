import React from 'react';
import { storiesOf } from '@storybook/react';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// Components 
import CustomInput from './CustomInput.js';

// Mocking data
const mockingData = {
    componentName: "CustomInput",
    Component: CustomInput,
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
    }, {
        type: "text",
        placeholder: "testing-placeholder",
        size: "large",
        required: true,
        colorMode: "dark"
    }, {
        type: "text",
        size: "medium",
        value: "hallo",
        required: true,
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))