import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import ShowMoreButton from './ShowMoreButton';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "ShowMoreButton",
    Component: ShowMoreButton,
    stories: [{
        isExpanded: false,
        onClick: () => {}
    }, {
        isExpanded: false,
        onClick: () => {},
        colorMode: "dark"
    }, {
        isExpanded: true,
        onClick: () => {}
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))