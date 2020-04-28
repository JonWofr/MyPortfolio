import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Components
import Slide from '../Slide';
import Spinner from '../Spinner';

//Styling
import styles from './Slideshow.module.scss';

const Slideshow = ({ slides }) => {
    const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);

    const slideFrozenTimeInSeconds = 5;
    const slideTransitionTimeInSeconds = 0.5;
    const animationDuration = slides.length * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds);
    const oneSecondInPercent = 100 / animationDuration;

    let keyframes;
    if (slides.length >= 3) {
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
        <div className={`${styles.slideshow} ${slides.length > 0 && loadedImagesCounter === slides.length ? styles.visible : ""}`}>
            {loadedImagesCounter !== slides.length &&
                <div className={styles.spinnerContainer}>
                    <Spinner colorMode="dark" />
                </div>
            }
            {keyframes &&
                <style>
                    {keyframes}
                </style>
            }
            {
                slides.map((slide, slideIndex) => {
                    const { title, subtitle, projectName, image, buttonColor, colorMode } = slide;
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
                                projectName={projectName}
                                image={image}
                                onLoadImage={() => setLoadedImagesCounter(loadedImagesCounter => loadedImagesCounter + 1)}
                                buttonColor={buttonColor}
                                colorMode={colorMode}
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
        _id: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        projectName: PropTypes.string,
        image: PropTypes.exact({
            url: PropTypes.string
        }),
        buttonColor: PropTypes.string,
        colorMode: PropTypes.oneOf(["light", "dark"])
    })).isRequired
}

export default Slideshow;