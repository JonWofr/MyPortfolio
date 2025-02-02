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
        isChecked: true,
        colorScheme: "secondaryAccent"
    }, {
        isChecked: false
    }, {
        isChecked: false,
        colorScheme: "secondaryAccent"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))