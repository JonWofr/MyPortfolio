import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import SearchField from './SearchField';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "SearchField",
    Component: SearchField,
    stories: [{
        value: "",
        onChange: () => console.info("No onChangeHandler specified")
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))