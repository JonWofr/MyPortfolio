import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational Components
import Select from './Select';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Select",
    Component: Select,
    stories: [{
        options: [{
            value: "hund",
            label: "Hund"
        }, {
            value: "katze",
            label: "Katze"
        }, {
            value: "maus",
            label: "Maus"
        }],
        selectedValue: ["hund"],
        onChangeValue: (e) => console.log(`Selected ${e.target.value}`),
        mode: "multi"
    }, {
        options: [{
            value: "hund",
            label: "Hund"
        }, {
            value: "katze",
            label: "Katze"
        }, {
            value: "maus",
            label: "Maus"
        }],
        selectedValue: ["hund"],
        onChangeValue: (e) => console.log(`Selected ${e.target.value}`),
        mode: "multi",
        colorMode: "dark"
    }, {
        options: [{
            value: "hund",
            label: "Hund"
        }, {
            value: "katze",
            label: "Katze"
        }, {
            value: "maus",
            label: "Maus"
        }],
        selectedValue: "fisch",
        onChangeValue: (e) => console.log(`Selected ${e.target.value}`),
        mode: "single"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))