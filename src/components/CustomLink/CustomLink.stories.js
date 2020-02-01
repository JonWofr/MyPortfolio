import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import CustomLink from './CustomLink.js';

storiesOf("CustomLink", module)
    .add("small", () => (
        <Router>
            <CustomLink to="/projects" size="small">
                Mehr
            </CustomLink>
        </Router>
    ))
    .add("medium", () => (
        <Router>
            <CustomLink to="/projects" size="medium">
                Mehr
            </CustomLink>
        </Router>
    ))
    .add("large", () => (
        <Router>
            <CustomLink to="/projects" size="large">
                Mehr
            </CustomLink>
        </Router>
    ))