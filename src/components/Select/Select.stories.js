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
            textNode: "Hund"
        }, {
            value: "katze",
            textNode: "Katze"
        }, {
            value: "maus",
            textNode: "Maus"
        }],
        selectedValue: ["hund"],
        onChangeValue: (e) => console.log(`Selected ${e.target.value}`),
        mode: "multi"
    }, {
        options: [{
            value: "hund",
            textNode: "Hund"
        }, {
            value: "katze",
            textNode: "Katze"
        }, {
            value: "maus",
            textNode: "Maus"
        }],
        selectedValue: "fisch",
        onChangeValue: (e) => console.log(`Selected ${e.target.value}`),
        mode: "single"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))