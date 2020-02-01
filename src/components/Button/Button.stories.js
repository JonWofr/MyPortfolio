import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Button from './Button.js';


storiesOf("Button", module)
    .add("small button enabled default-secondary", () => (<Button size="small" type="button">Hier</Button>))
    .add("medium button disabled default-secondary", () =>
        <Button size="medium" type="button" disabled={true}>
            Hier
        </Button>
    )
    .add("large submit enabled default-secondary", () => (
        <Button size="large" type="submit">
            Hier
        </Button>
    ))
    .add("medium button enabled default-primary", () => (
        <Button size="medium" type="button" colorScheme="default-primary">
            Hier
        </Button>
    ))
    .add("medium button enabled inverted-secondary", () => (
        <Button size="medium" type="button" colorScheme="inverted-secondary">
            Hier
        </Button>
    ))
    .add("medium button enabled inverted-primary", () => (
        <Button size="medium" type="button" colorScheme="inverted-primary">
            Hier
        </Button>
    ))
