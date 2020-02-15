import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import FiltersBar from './FiltersBar';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "FiltersBar",
    Component: FiltersBar,
    stories: [{
        filters: [{
            listName: "Category",
            listItems: [{
                name: "Android",
                isChecked: false
            }, {
                name: "iOS",
                isChecked: true
            }, {
                name: "Web",
                isChecked: false
            }],
            checkedCheckboxesCount: 1
        }, {
            listName: "Technology",
            listItems: [{
                name: "React",
                isChecked: true
            }, {
                name: "Angular",
                isChecked: false
            }],
            checkedCheckboxesCount: 1
        }, {
            listName: "Language",
            listItems: [{
                name: "JavaScript",
                isChecked: true
            }, {
                name: "Kotlin",
                isChecked: false
            }, {
                name: "Java",
                isChecked: true
            }, {
                name: "Swift",
                isChecked: false
            }, {
                name: "SQL",
                isChecked: true
            }, {
                name: "C",
                isChecked: false
            }], 
            checkedCheckboxesCount: 3
        }]
    }],
    onChangeCheckbox: (filterIndex, checkboxIndex) => console.info(`Clicked item at filter nr ${filterIndex} and listIndex ${checkboxIndex}`),
    searchFieldValue: "And",
    onChangeSearchField: () => console.info("No onChangeHandler specified")
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))