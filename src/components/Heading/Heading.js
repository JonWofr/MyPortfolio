import React from 'react';
import PropTypes from 'prop-types';

//import Styles
import styles from './Heading.module.scss'

const Heading = ({ children, type, colorMode }) => {
    switch (type) {
        case "primary":
            return (
                <h1 className={`${styles.heading} ${styles[colorMode]}`}>
                    {children}
                </h1>
            )
        case "secondary":
            return (
                <h2 className={`${styles.heading} ${styles[colorMode]}`}>
                    {children}
                </h2>
            )
        case "tertiary":
            return (
                <h3 className={`${styles.heading} ${styles[colorMode]}`}>
                    {children}
                </h3>
            )
        case "quatenary":
            return (
                <h4 className={`${styles.heading} ${styles[colorMode]}`}>
                    {children}
                </h4>
            )
        default:
            console.log("Invalid prop 'type' for component Heading")
            break;
    }
}

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary", "quatenary"]),
    colorMode: PropTypes.oneOf(["dark", "light"])
}

Heading.defaultProps = {
    colorMode: "light"
}

export default Heading;