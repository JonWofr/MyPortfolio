import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import CustomLink from './CustomLink.js';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "CustomLink",
    Component: CustomLink,
    stories: [{
        size: "small",
        to: "/projects",
        children: "Hier"
    }, {
        size: "medium",
        to: "/projects",
        children: "Hier"
    }, {
        size: "large",
        to: "/projects",
        children: "Hier"
    }, {
        size: "fluid",
        to: "/projects",
        children: "Hier"
    }, {
        size: "medium",
        to: "/projects",
        children: "Hier",
        colorScheme: "primaryAccent"
    }, {
        size: "medium",
        to: "/projects",
        children: "Hier",
        colorScheme: "secondaryAccent"
    }, {
        size: "medium",
        to: "/projects",
        children: "Hier",
        colorScheme: "invertedPrimaryAccent"
    }, {
        size: "medium",
        to: "/projects",
        children: "Hier",
        colorScheme: "invertedSecondaryAccent"
    }, {
        size: "medium",
        to: "/projects",
        children: "Hier",
        disabled: true
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <Router>
        <mockingData.Component {...story} />
    </Router>
)))