import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import ProjectNavigation from './ProjectNavigation';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "ProjectNavigation",
    Component: ProjectNavigation,
    stories: [{
        default: true,
        onClickArrowUpButton: () => {},
        onClickArrowDownButton: () => {}
    }, {
        default: true,
        onClickArrowUpButton: () => {},
        onClickArrowDownButton: () => {},
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))