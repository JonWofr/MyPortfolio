import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

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
        <Router>
            <div style={{ width: "50%", height: "400px" }}>
                <mockingData.Component {...story} />
            </div>
        </Router>
    )))