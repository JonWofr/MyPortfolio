import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import CheckboxList from './CheckboxList';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "CheckboxList",
    Component: CheckboxList,
    stories: [{
        items: [{
            name: "Android",
            isChecked: false
        }, {
            name: "iOS",
            isChecked: true
        }, {
            name: "Web",
            isChecked: true
        }],
        onChangeCheckbox: (checkboxIndex, value) => console.info(`Changed Checkbox at index ${checkboxIndex} to value ${value}`)
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))