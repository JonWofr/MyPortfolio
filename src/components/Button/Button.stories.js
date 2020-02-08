import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Button from './Button.js';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Button",
    Component: Button,
    stories: [{
        size: "small",
        type: "button",
        children: "Hier"
    }, {
        size: "medium",
        type: "button",
        children: "Hier"
    }, {
        size: "large",
        type: "button",
        children: "Hier"
    }, {
        size: "fluid",
        type: "button",
        children: "Hier"
    }, {
        size: "medium",
        type: "button",
        children: "Hier",
        colorScheme: "primaryAccent"
    }, {
        size: "medium",
        type: "button",
        children: "Hier",
        colorScheme: "secondaryAccent"
    }, {
        size: "medium",
        type: "button",
        children: "Hier",
        colorScheme: "invertedPrimaryAccent"
    }, {
        size: "medium",
        type: "button",
        children: "Hier",
        colorScheme: "invertedSecondaryAccent"
    }, {
        size: "medium",
        type: "button",
        children: "Hier",
        disabled: true
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))