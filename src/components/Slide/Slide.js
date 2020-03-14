import React from 'react';
import PropTypes from 'prop-types';

// Components
import CustomLink from '../CustomLink';
import Heading from '../Heading';

// Styles
import styles from './Slide.module.scss';

const Slide = ({ title, subtitle, colorMode, customLinkTargetUrl, image }) => (
    <div className={`${styles.slide} ${styles[colorMode]}`}>
        <img
            src={image.url}
            alt=""
        />
        <div className={styles.content}>
            <Heading type="primary" colorMode={colorMode}>
                {title}
            </Heading>
            {subtitle &&
                <Heading type="secondary" colorMode={colorMode}>
                    {subtitle}
                </Heading>
            }
            <div className={styles.customLinkContainer}>
                <CustomLink to={customLinkTargetUrl} colorScheme={colorMode === "light" ? "primaryAccent" : "secondaryAccent"} size="small">
                    Mehr
                </CustomLink>
            </div>
        </div>
    </div>
)

Slide.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"]),
    customLinkTargetUrl: PropTypes.string,
    image: PropTypes.exact({
        url: PropTypes.string,
        dataUrl: PropTypes.any
    })
}

Slide.defaultProps = {
    colorMode: "light"
}

export default Slide;