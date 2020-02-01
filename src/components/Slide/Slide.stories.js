import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

//Components
import Slide from './Slide.js'

//Assets
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';


//Mocking data
export const mockingData = [
    {
        title: "Clubber:",
        subtitle: "Veranstaltungen in Stuttgart",
        projectName: "clubber",
        image: {
            url: slide1,
            order: 1
        }
    },
    {
        title: "Travisa:",
        projectName: "travisa",
        image: {
            url: slide2,
            order: 2
        }
    },
    {
        title: "Reel",
        subtitle: "The better Netflix",
        projectName: "reel",
        image: {
            url: slide3,
            order: 3
        }
    },
    {
        title: "Wordsearch:",
        subtitle: "Coding challenge",
        projectName: "wordsearch",
        image: {
            url: slide4,
            order: 4
        }
    }
]

storiesOf("Slide", module)
    .add("with title, with subtitle", () => {
        console.log(mockingData);
        return (
            <Router>
                <div style={{height: "100vh"}}>
                    <Slide {...mockingData[0]} />
                </div>
            </Router>
        )
    })
    .add("with title, without subtitle", () => {
        return (
            <Router>
                <div style={{height: "100vh"}}>
                    <Slide {...mockingData[1]} />
                </div>
            </Router>
        )
    })