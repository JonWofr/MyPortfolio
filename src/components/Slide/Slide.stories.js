import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

//Components
import Slide from './Slide.js'

//Assets
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide4 from '../../assets/images/slide4.jpg';

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
export const mockingData = {
    componentName: "Slide",
    Component: Slide,
    stories: [
        {
            title: "Clubber:",
            subtitle: "Veranstaltungen in Stuttgart",
            colorMode: "dark",
            projectName: "clubber",
            image: {
                url: slide1,
                dataUrl: null
            },
            hasImageLoaded: true
        },
        {
            title: "Travisa:",
            projectName: "clubber",
            image: {
                url: slide2,
                dataUrl: null
            },
            hasImageLoaded: true
        },
        {
            title: "Reel",
            subtitle: "The better Netflix",
            colorMode: "dark",
            projectName: "reel",
            image: {
                url: slide3,
                dataUrl: null
            },
            hasImageLoaded: true
        },
        {
            title: "Wordsearch:",
            subtitle: "Coding challenge",
            projectName: "wordsearch",
            image: {
                url: slide4,
                dataUrl: null
            },
            hasImageLoaded: true
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