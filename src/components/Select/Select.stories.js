import React from 'react';
import { storiesOf } from '@storybook/react';

// Presentational Components
import Select from './Select';

// Mocking data
const options = [{
    value: "hund",
    textNode: "Hund"
}, {
    value: "katze",
    textNode: "Katze"
}, {
    value: "maus",
    textNode: "Maus"
}];

storiesOf("Select", module)
    .add("Multi", () => (
        <Select
            options={options}
            selectedValue={["hund"]}
            onChangeValue={(e) => { console.log(`Selected ${e.target.value}`) }}
            mode="multi"
        />
    ))
    .add("Single", () => (
        <Select
            options={options}
            selectedValue={"fisch"}
            onChangeValue={(e) => { console.log(`Selected ${e.target.value}`) }}
            mode="single"
        />
    ))