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
        children: "Hier",
        to: "/projects",
        color: "red"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        size: "small"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        size: "medium"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        size: "large"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        size: "fluid"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        colorMode: "light"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        colorMode: "dark"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        type: "default"
    }, {
        children: "Hier",
        to: "/projects",
        color: "red",
        type: "inverted"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <Router>
        <mockingData.Component {...story} />
    </Router>
)))