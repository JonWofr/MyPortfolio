import React from 'react';
import PropTypes from 'prop-types';

// Components
import CustomLink from '../CustomLink';
import Heading from '../Heading';

// Styles
import styles from './Slide.module.scss';

const Slide = ({ title, subtitle, colorMode, projectName, image }) => (
    <div className={`${styles.slide} ${styles[colorMode]}`}>
        <img
            src={image.url}
            alt=""
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

const getQueryString = (projectName) => `query={"projectName":{"$regex":"${projectName}","$options":"i"}}`

Slide.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"]),
    projectName: PropTypes.string,
    image: PropTypes.exact({
        url: PropTypes.string,
        dataUrl: PropTypes.any
    })
}

Slide.defaultProps = {
    colorMode: "light"
}

export default Slide;