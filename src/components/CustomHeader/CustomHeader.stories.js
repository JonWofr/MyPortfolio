import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import CustomHeader from './CustomHeader';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "CustomHeader",
    Component: CustomHeader,
    stories: [{
        default: true
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <Router>
        <mockingData.Component {...story} />
    </Router>
)))