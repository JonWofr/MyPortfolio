import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Components
import Slide from '../Slide';
import Spinner from '../Spinner';

//Styling
import styles from './Slideshow.module.scss';

const Slideshow = ({ slides }) => {
    const [loadedImagesCounter, setLoadedImagesCounter] = useState(0);

    // Less than three slides leads to bugs
    if (slides.length <= 2) {
        console.warn("Not enough slides provided for the slideshow to start");
        return (
            <div className={styles.slideshow}>
                <div className={styles.spinnerContainer}>
                    <Spinner colorMode="dark" />
                </div>
            </div>
        )
    }
    else {
        const slideFrozenTimeInSeconds = 5;
        const slideTransitionTimeInSeconds = 0.5;
        const animationDuration = slides.length * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds);
        const oneSecondInPercent = 100 / animationDuration;
        const haveAllImagesBeenLoaded = loadedImagesCounter === slides.length;

        const keyframes = `@keyframes fade-out {
            0% { opacity: 1; z-index: 2; pointer-events: all; }
            ${oneSecondInPercent * slideFrozenTimeInSeconds}% { opacity: 1; z-index: 2; pointer-events: all; }
            ${oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds)}% { opacity: 0; z-index: 2; pointer-events: none; }
            ${oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds)}.01% { opacity: 0; z-index: 0; pointer-events: none; }
            ${100 - oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds) - 0.01}% { opacity: 0; z-index: 0; pointer-events: none; }
            ${100 - oneSecondInPercent * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds)}% { opacity: 1; z-index: 1; pointer-events: none; }
            100% { opacity: 1; z-index: 1; pointer-events: none; }
        }`;

        return (
            <div className={`${styles.slideshow} ${haveAllImagesBeenLoaded ? styles.visible : ""}`}>
                <style>
                    {keyframes}
                </style>
                {!haveAllImagesBeenLoaded &&
                    <div className={styles.spinnerContainer}>
                        <Spinner colorMode="dark" />
                    </div>
                }
                {slides.map((slide, slideIndex) => {
                    const { title, subtitle, projectName, image, buttonBackgroundColor, buttonFontColor, colorMode } = slide;
                    const style = {
                        animationName: "fade-out",
                        animationDuration: animationDuration + "s",
                        animationDelay: (slides.length - 1 - slideIndex) * (slideFrozenTimeInSeconds + slideTransitionTimeInSeconds) + "s",
                        animationPlayState: haveAllImagesBeenLoaded ? "running" : "paused"
                    }
                    return (
                        <div key={slideIndex} className={styles.slideContainer} style={style}>
                            <Slide
                                title={title}
                                subtitle={subtitle}
                                projectName={projectName}
                                image={image}
                                onLoadImage={() => setLoadedImagesCounter(loadedImagesCounter => loadedImagesCounter + 1)}
                                buttonBackgroundColor={buttonBackgroundColor}
                                buttonFontColor={buttonFontColor}
                                colorMode={colorMode}
                            />
                        </div>
                    )
                })
                }
            </div>
        )
    }
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
        buttonBackgroundColor: PropTypes.string,
        buttonFontColor: PropTypes.string,
        colorMode: PropTypes.oneOf(["light", "dark"])
    })).isRequired
}

export default Slideshow;