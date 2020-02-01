import React from 'react';
import { storiesOf } from '@storybook/react';

//components
import List from './List.js';

//mocking data
export const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

storiesOf("List", module).add("Default", () => <List items={items}></List>)