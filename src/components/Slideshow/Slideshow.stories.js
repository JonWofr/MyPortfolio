import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Slideshow from './Slideshow';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// Images
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';

// MockingData
export const mockingData = {
    componentName: "Slideshow",
    Component: Slideshow,
    stories: [{
        slides: [
            {
                title: "Clubber:",
                subtitle: "Veranstaltungen in Stuttgart",
                colorMode: "dark",
                projectName: "clubber",
                image: {
                    url: slide1,
                    dataUrl: null
                }
            },
            {
                title: "Travisa:",
                projectName: "clubber",
                image: {
                    url: slide2,
                    dataUrl: null
                }
            },
            {
                title: "Reel",
                subtitle: "The better Netflix",
                colorMode: "dark",
                projectName: "reel",
                image: {
                    url: slide3,
                    dataUrl: null
                }
            },
            {
                title: "Wordsearch:",
                subtitle: "Coding challenge",
                projectName: "wordsearch",
                image: {
                    url: slide4,
                    dataUrl: null
                }
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