import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import CustomTextArea from './CustomTextArea';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "CustomTextArea",
    Component: CustomTextArea,
    stories: [{
        value: "hallo",
        placeholder: "With content"
    }, {
        value: "hallo",
        placeholder: "With content",
        colorMode: "dark"
    }, {
        value: "",
        placeholder: "Without content"
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <div style={{ height: "200px" }}>
        <mockingData.Component {...story} />
    </div>
)))