import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import BadgeList from './BadgeList';

// Mocking data
const items = ["Kotlin", "Swift", "Java", "JavaScript", "PHP"]


storiesOf("BadgeList", module)
    .add("5 Items, horizontal", () => (
        <BadgeList items={items} />
    ))
    .add("5 Items, vertical", () => (
        <BadgeList items={items} direction="vertical" />
    ))