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
        listName: "Categories",
        listItems: [{
            name: "Web Application",
            isChecked: true
        }, {
            name: "Mobile Application",
            isChecked: false
        }, {
            name: "Other",
            isChecked: true
        }],
        onChangeCheckbox: (checkboxIndex, value) => console.info(`Changed Checkbox at index ${checkboxIndex} to value ${value}`),
        checkedCheckboxesCount: 2
    }, {
        listName: "Categories",
        listItems: [{
            name: "Web Application",
            isChecked: true
        }, {
            name: "Mobile Application",
            isChecked: false
        }, {
            name: "Other",
            isChecked: true
        }],
        onChangeCheckbox: (checkboxIndex, value) => console.info(`Changed Checkbox at index ${checkboxIndex} to value ${value}`),
        checkedCheckboxesCount: 2,
        colorScheme: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))