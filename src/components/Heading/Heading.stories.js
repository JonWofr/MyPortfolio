import React from 'react';
import { storiesOf } from '@storybook/react';

//Import component
import Heading from './Heading.js';

storiesOf("Heading", module)
    .add("Primary", () => (
        <Heading type="primary">
            Primary
        </Heading>
    ))
    .add("Secondary", () => (
        <Heading type="secondary">
            Secondary
        </Heading>
    ))
    .add("Tertiary", () => (
        <Heading type="tertiary">
            Tertiary
        </Heading>
    ))