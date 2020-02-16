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
            value: "android",
            label: "Android",
            isChecked: false
        }, {
            value: "ios",
            label: "iOS",
            isChecked: true
        }, {
            value: "web",
            label: "Web",
            isChecked: true
        }],
        onChangeCheckbox: (value, isChecked) => console.info(`Changed Checkbox with value ${value} to checked ${isChecked}`)
    }, {
        items: [{
            value: "android",
            label: "Android",
            isChecked: false
        }, {
            value: "ios",
            label: "iOS",
            isChecked: true
        }, {
            value: "web",
            label: "Web",
            isChecked: true
        }],
        onChangeCheckbox: (value, isChecked) => console.info(`Changed Checkbox with value ${value} to checked ${isChecked}`),
        colorScheme: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))