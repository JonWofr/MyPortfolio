import React from 'react';
import { storiesOf } from '@storybook/react';

//Import component
import Heading from './Heading.js';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Heading",
    Component: Heading,
    stories: [{
        type: "primary",
        children: "Primary"
    }, {
        type: "secondary",
        children: "Secondary"
    }, {
        type: "tertiary",
        children: "Tertiary"
    }, {
        type: "quatenary",
        children: "Quatenary"
    }, ]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))