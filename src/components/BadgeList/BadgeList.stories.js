import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import BadgeList from './BadgeList';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "BadgeList",
    Component: BadgeList,
    stories: [{
        items: ["Kotlin", "Swift", "Java", "JavaScript", "PHP"],
    }, {
        items: ["Kotlin", "Swift", "Java", "JavaScript", "PHP"],
        direction: "vertical"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))