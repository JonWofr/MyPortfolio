import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

// Components
import Slide from './Slide.js'

// Images
import slide1 from '../../assets/images/slide-1.svg';
import slide2 from '../../assets/images/slide-2.svg';
import slide3 from '../../assets/images/slide-3.svg';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Slide",
    Component: Slide,
    stories: [
        {
            title: "Travisa",
            subtitle: "Auslandssemester Planung leicht gemacht",
            colorMode: "dark",
            projectName: "travisa",
            image: {
                url: slide1,
            },
            onLoadImage: () => console.info("no onLoadImageHandler specified"),
            buttonBackgroundColor: "#47B6F4",
            buttonFontColor: "#1a1a1a"
        },
        {
            title: "dein geschenkgutschein",
            subtitle: "Verschenken Sie den perfekten Gutschein an Ihren Liebsten",
            projectName: "dein-geschenkgutschein",
            image: {
                url: slide2,
            },
            onLoadImage: () => console.info("no onLoadImageHandler specified"),
            buttonBackgroundColor: "#FF4B4B",
            buttonFontColor: "#1a1a1a"
        },
        {
            title: "agile toolbox",
            subtitle: "Alle gängigen agilen Methoden in einem Baukasten",
            colorMode: "dark",
            projectName: "agile-toolbox",
            image: {
                url: slide3,
            },
            onLoadImage: () => console.info("no onLoadImageHandler specified"),
            buttonBackgroundColor: "#4ECDC4",
            buttonFontColor: "#1a1a1a"
        }
    ]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <Router>
        <div style={{ height: "100vh" }}>
            <mockingData.Component {...story} />
        </div>
    </Router>
)))