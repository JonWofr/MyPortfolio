import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Checkbox from './Checkbox';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Checkbox",
    Component: Checkbox,
    stories: [{
        isChecked: true
    }, {
        isChecked: false
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))