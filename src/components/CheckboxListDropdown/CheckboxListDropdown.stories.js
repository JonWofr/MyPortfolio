import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import CheckboxListDropdown from './CheckboxListDropdown';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "CheckboxListDropdown",
    Component: CheckboxListDropdown,
    stories: [{
        name: "categories",
        label: "Categories",
        listItems: [{
            value: "webApplication",
            label: "Web Application",
            isChecked: true
        }, {
            value: "mobileApplication",
            label: "Mobile Application",
            isChecked: false
        }, {
            value: "other",
            label: "Other",
            isChecked: true
        }],
        onChangeCheckbox: (name, value, isChecked) => console.info(`Changed Checkbox from list with name ${name} with value ${value} to checked ${isChecked}`),
        checkedCheckboxesCount: 2
    }, {
        name: "categories",
        label: "Categories",
        listItems: [{
            value: "webApplication",
            label: "Web Application",
            isChecked: true
        }, {
            value: "mobileApplication",
            label: "Mobile Application",
            isChecked: false
        }, {
            value: "other",
            label: "Other",
            isChecked: true
        }],
        onChangeCheckbox: (name, value, isChecked) => console.info(`Changed Checkbox from list with name ${name} with value ${value} to checked ${isChecked}`),
        checkedCheckboxesCount: 2,
        colorScheme: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))