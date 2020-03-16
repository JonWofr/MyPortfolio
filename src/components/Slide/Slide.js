import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import CustomLink from '../CustomLink';

// Styles
import styles from './Slide.module.scss';

const Slide = memo(({ title, projectName, image, onLoadImage, subtitle, colorMode }) => {
    console.log("rendering")
    return (
        <div className={`${styles.slide} ${styles[colorMode]}`}>
            <img
                data-src={image.url}
                alt=""
                ref={element => {
                    if (element) {
                        element.addEventListener("load", onLoadImage)
                        element.addEventListener("error", e => console.warn("Could not load image with url", e.target.src));
                        element.setAttribute("src", element.getAttribute("data-src"));
                    }
                }}
            />
            <div className={styles.content}>
                <h1 className={`${styles.heading} ${styles.secondary}`}>
                    {title}
                </h1>
                {subtitle &&
                    <h2 className={`${styles.heading} ${styles.secondary}`}>
                        {subtitle}
                    </h2>
                }
                <div className={styles.customLinkContainer}>
                    <CustomLink to={{ pathname: "projects", search: getQueryString(projectName) }} colorScheme={colorMode === "light" ? "invertedPrimaryAccent" : "invertedSecondaryAccent"} size="small">
                        Mehr
                    </CustomLink>
                </div>
            </div>
        </div>
    )
}, () => true)

const getQueryString = (projectName) => `query={"projectName":{"$regex":"${projectName}","$options":"i"}}`

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    image: PropTypes.exact({
        url: PropTypes.string,
        dataUrl: PropTypes.any
    }).isRequired,
    onLoadImage: PropTypes.func.isRequired,
    subtitle: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

Slide.defaultProps = {
    colorMode: "light"
}

export default Slide;