import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import LoginWindow from './LoginWindow';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "LoginWindow",
    Component: LoginWindow,
    stories: [{
        mode: "signUp",
        username: "Jonas",
        password: "12345",
        onChangeCustomInputValue: () => console.info("No onChangeHandler specified"),
        onSubmit: () => console.info("No onSubmitHandler specified"),
     }, {
        mode: "login",
        username: "Jonas",
        password: "",
        onChangeCustomInputValue: () => console.info("No onChangeHandler specified"),
        onSubmit: () => console.info("No onSubmitHandler specified"),
        colorMode: "dark"
     }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () =>
    (
        <div style={{ width: "50%", height: "400px" }}>
            <mockingData.Component {...story} />
        </div>
    )))