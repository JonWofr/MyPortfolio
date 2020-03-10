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
            name: "category",
            label: "Category",
            listItems: [{
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
                isChecked: false
            }],
            checkedCheckboxesCount: 1
        }, {
            name: "technology",
            label: "Technology",
            listItems: [{
                value: "react",
                label: "React",
                isChecked: true
            }, {
                value: "angular",
                label: "Angular",
                isChecked: false
            }],
            checkedCheckboxesCount: 1
        }, {
            name: "language",
            label: "Language",
            listItems: [{
                value: "javaScript",
                label: "JavaScript",
                isChecked: true
            }, {
                value: "kotlin",
                label: "Kotlin",
                isChecked: false
            }, {
                value: "java",
                label: "Java",
                isChecked: true
            }, {
                value: "swift",
                label: "Swift",
                isChecked: false
            }, {
                value: "sql",
                label: "SQL",
                isChecked: true
            }, {
                value: "c",
                label: "C",
                isChecked: false
            }], 
            checkedCheckboxesCount: 3
        }],
        onChangeCheckbox: (name, value, isChecked) => console.info(`Changed Checkbox from list with name ${name} with value ${value} to checked ${isChecked}`),
        searchFieldValue: "And",
        onChangeSearchFieldValue: () => console.info("No onChangeHandler specified"),
        onClickSearchFieldResetButton: () => console.info("No onClickHandler specified"),
        totalAppliedFiltersCount: 4,
        onClickClearFiltersButton: () => console.info("clicked")
    }, {
        filters: [{
            name: "category",
            label: "Category",
            listItems: [{
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
                isChecked: false
            }],
            checkedCheckboxesCount: 1
        }, {
            name: "technology",
            label: "Technology",
            listItems: [{
                value: "react",
                label: "React",
                isChecked: true
            }, {
                value: "angular",
                label: "Angular",
                isChecked: false
            }],
            checkedCheckboxesCount: 1
        }, {
            name: "language",
            label: "Language",
            listItems: [{
                value: "javaScript",
                label: "JavaScript",
                isChecked: true
            }, {
                value: "kotlin",
                label: "Kotlin",
                isChecked: false
            }, {
                value: "java",
                label: "Java",
                isChecked: true
            }, {
                value: "swift",
                label: "Swift",
                isChecked: false
            }, {
                value: "sql",
                label: "SQL",
                isChecked: true
            }, {
                value: "c",
                label: "C",
                isChecked: false
            }], 
            checkedCheckboxesCount: 3
        }],
        onChangeCheckbox: (name, value, isChecked) => console.info(`Changed Checkbox from list with name ${name} with value ${value} to checked ${isChecked}`),
        searchFieldValue: "And",
        onChangeSearchFieldValue: () => console.info("No onChangeHandler specified"),
        onClickSearchFieldResetButton: () => console.info("No onClickHandler specified"),
        onClickClearFiltersButton: () => console.info("clicked"),
        totalAppliedFiltersCount: 4,
        colorMode: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))