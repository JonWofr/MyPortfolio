import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Badge from './Badge';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Badge",
    Component: Badge,
    stories: [{
        children: "Kotlin",
    }, {
        children: "Kotlin",
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))