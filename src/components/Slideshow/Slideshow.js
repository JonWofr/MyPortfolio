import React from 'react';
import PropTypes from 'prop-types';

//Components
import Slide from '../Slide';

//Styling
import styles from './Slideshow.module.scss';

const Slideshow = ({ slides }) => {
    const slideFrozenTimeInSeconds = 5;
    const slideTransitionTimeInSeconds = 0.5;
    const animationDuration = slides.length * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds);
    const oneSecondInPercent = 100 / animationDuration;

    let keyframes;
    if (slides.length >= 2) {
        keyframes = `@keyframes fade-out {
            0% { opacity: 1; z-index: 2; }
            ${oneSecondInPercent * slideFrozenTimeInSeconds}% { opacity: 1; z-index: 2; }
            ${oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds)}% { opacity: 0; z-index: 2; }
            ${oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds)}.01% { opacity: 0; z-index: 0; }
            ${100 - oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds) - 0.01}% { opacity: 0; z-index: 0; }
            ${100 - oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds)}% { opacity: 1; z-index: 1; }
            100% { opacity: 1; z-index: 1; }
        }`;
    }

    return (
        <div className={styles.slideshow}>
            {keyframes &&
                <style>
                    {keyframes}
                </style>
            }
            {
                slides.map((slide, slideIndex) => {
                    const { title, subtitle, colorMode, projectName, image } = slide;
                    const style = {
                        animationName: "fade-out",
                        animationDuration: animationDuration + "s",
                        animationDelay: (slides.length - 1 - slideIndex) * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds) + "s",
                    }
                    return (
                        <div key={slideIndex} className={styles.slideContainer} style={style}>
                            <Slide
                                title={title}
                                subtitle={subtitle}
                                colorMode={colorMode}
                                projectName={projectName}
                                image={image}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

Slideshow.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.exact({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        colorMode: PropTypes.oneOf(["primaryAccent", "secondaryAccent", "invertedPrimaryAccent", "invertedSecondaryAccent"]),
        projectName: PropTypes.string,
        image: PropTypes.exact({
            url: PropTypes.string,
            dataUrl: PropTypes.any
        })
    })).isRequired
}

export default Slideshow;