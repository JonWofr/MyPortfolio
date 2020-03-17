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
        onChangeValue: () => console.info("No onChangeHandler specified"),
        onClickResetButton: () => console.info("No onClickHandler specified")
    }, {
        value: "",
        onChangeValue: () => console.info("No onChangeHandler specified"),
        onClickResetButton: () => console.info("No onClickHandler specified"),
        colorScheme: "dark"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => <mockingData.Component {...story} />))