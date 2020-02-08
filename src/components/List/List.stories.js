import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import List from './List.js';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "List",
    Component: List,
    stories: [{
        items: ["Kotlin", "Swift", "Java", "JavaScript", "PHP"],
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))
