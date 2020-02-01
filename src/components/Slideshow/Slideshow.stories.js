import { storiesOf } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//Components
import Slideshow from './Slideshow.js';

//Mocking data
import { mockingData } from '../Slide/Slide.stories.js';

storiesOf("Slideshow", module)
    .add("four items", () => {
        return (
            <Router>
                <div style={{height: "100vh"}}>
                    <Slideshow slides={mockingData} />
                </div>
            </Router>
        )
    })