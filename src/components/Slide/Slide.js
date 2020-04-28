import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Components
import CustomLink from '../CustomLink';

// Styles
import styles from './Slide.module.scss';

const Slide = memo(({ title, subtitle, projectName, image, onLoadImage, buttonColor, colorMode }) => (
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
                <CustomLink to={{ pathname: "projects", search: getQueryString(projectName) }} color={buttonColor} size="medium" colorMode={colorMode} >
                    Mehr
                </CustomLink>
            </div>
        </div>
    </div>
), () => true)

const getQueryString = (projectName) => `query={"projectName":{"$regex":"${projectName}","$options":"i"}}`

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    projectName: PropTypes.string.isRequired,
    image: PropTypes.exact({
        url: PropTypes.string,
    }).isRequired,
    onLoadImage: PropTypes.func.isRequired,
    buttonColor: PropTypes.string.isRequired,

    colorMode: PropTypes.oneOf(["light", "dark"])
}

Slide.defaultProps = {
    colorMode: "light"
}

export default Slide;