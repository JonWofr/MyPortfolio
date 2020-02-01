import React from 'react';
import { storiesOf } from '@storybook/react';

// Components 
import Input from './Input.js';

// Mocking data
const data = [{
    type: "text",
    placeholder: "testing-placeholder",
    size: "large",
    required: true
}, {
    type: "text",
    size: "medium",
    value: "hallo",
    required: true
}]

storiesOf("Input", module)
    .add("large type text with placeholder", () => <Input {...data[0]} />)
    .add("medium type text without placeholder", () => <Input {...data[1]} />)