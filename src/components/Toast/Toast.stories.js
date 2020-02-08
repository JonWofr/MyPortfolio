import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational component
import Toast from './Toast';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Toast",
    Component: Toast,
    stories: [{
        type: "success",
        heading: "Success!",
        description: "Everything worked."
    }, {
        type: "info",
        heading: "Info!",
        description: "This happenned."
    }, {
        type: "warn",
        heading: "Warning!",
        description: "Something went not as planned."
    }, {
        type: "error",
        heading: "Error!",
        description: "Something did not work."
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))