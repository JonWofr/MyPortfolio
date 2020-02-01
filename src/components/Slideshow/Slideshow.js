import React from 'react';
import PropTypes from 'prop-types';

//Components
import Slide from '../Slide';

//Styling
import styles from './Slideshow.module.scss';

const Slideshow = ({ slides }) => {
    let keyframe = `@keyframes sliding { `;
    const duration = `${slides.length * 5}s`;
    return (
        <div id={styles.slideshow} style={{ animationDuration: duration }}>
            {slides.length > 0 &&
                slides.map((slide, index) => {
                    keyframe += `${100 / (slides.length * 2 - 1) * index * 2}% {transform: translateX(${-100 * index}vw);} ${100 / (slides.length * 2 - 1) * (index * 2 + 1)}% {transform: translateX(${-100 * index}vw);} `;
                    return (
                        <div key={index} className={styles.slideContainer}>
                            <Slide
                                title={slide.title}
                                subtitle={slide.subtitle}
                                projectName={slide.projectName}
                                image={slide.image}
                            />
                        </div>
                    )
                })
            }
            <style>
                {`${keyframe}}`}
            </style>
        </div>
    )
}

Slideshow.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.exact({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        projectName: PropTypes.string,
        image: PropTypes.object
    })).isRequired
}

export default Slideshow;