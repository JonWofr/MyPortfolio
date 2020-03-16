import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Spinner from './Spinner';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Spinner",
    Component: Spinner,
    stories: [{
        colorMode: "light"
    }, {
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <div style={{
        width: "100px",
        height: "100px"
    }}>
        <mockingData.Component {...story} />
    </div>
)))