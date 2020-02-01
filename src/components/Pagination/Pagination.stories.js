import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Pagination from './Pagination';

storiesOf("Pagination", module)
    .add("5 pages, currently 2", () => (
        <Pagination
            page={2}
            lastPage={5}
            onClickPage={(page) => console.log(`Trying to navigate to page ${page}`)}
        />
    ))
    .add("10 pages, currently 1", () => (
        <Pagination
            page={1}
            lastPage={10}
            onClickPage={(page) => console.log(`Trying to navigate to page ${page}`)}
        />
    ))
    .add("1 page, currently 1", () => (
        <Pagination
            page={1}
            lastPage={1}
            onClickPage={(page) => console.log(`Trying to navigate to page ${page}`)}
        />
    ))