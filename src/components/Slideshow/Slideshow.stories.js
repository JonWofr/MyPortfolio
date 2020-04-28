import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Slideshow from './Slideshow';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// Images
import slide1 from '../../assets/images/slide-1.svg';
import slide2 from '../../assets/images/slide-2.svg';
import slide3 from '../../assets/images/slide-3.svg';

// MockingData
export const mockingData = {
    componentName: "Slideshow",
    Component: Slideshow,
    stories: [{
        slides: [
            {
                _id: "1",
                title: "Travisa:",
                subtitle: "Auslandssemester Planung leicht gemacht",
                colorMode: "dark",
                projectName: "travisa",
                image: {
                    url: slide1,
                },
                buttonColor: "#47B6F4"
            },
            {
                _id: "2",
                title: "dein geschenkgutschein:",
                subtitle: "Verschenken Sie den perfekten Gutschein an Ihren Liebsten",
                projectName: "dein-geschenkgutschein",
                image: {
                    url: slide2,
                },
                buttonColor: "#FF4B4B"
            },
            {
                _id: "3",
                title: "agile toolbox",
                subtitle: "Alle gängigen agilen Methoden in einem Baukasten",
                colorMode: "dark",
                projectName: "agile-toolbox",
                image: {
                    url: slide3,
                },
                buttonColor: "#4ECDC4"
            }
        ]
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <Router>
        <div style={{ height: "100%" }}>
            <mockingData.Component {...story} />
        </div>
    </Router>
)))