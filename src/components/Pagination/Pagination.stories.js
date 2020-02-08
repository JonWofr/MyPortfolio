import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Pagination from './Pagination';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Pagination",
    Component: Pagination,
    stories: [{
        page: 2,
        lastPage: 5,
        onClickPage: (page) => console.log(`Trying to navigate to page ${page}`)
    }, {
        page: 1,
        lastPage: 10,
        onClickPage: (page) => console.log(`Trying to navigate to page ${page}`)
    }, {
        page: 1,
        lastPage: 1,
        onClickPage: (page) => console.log(`Trying to navigate to page ${page}`)
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))
