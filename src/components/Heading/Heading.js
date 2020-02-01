import React from 'react';
import PropTypes from 'prop-types';

//import Styles
import styles from './Heading.module.scss'

const Heading = ({ children, type }) => {
    switch (type) {
        case "primary":
            return (
                <h1 className={`${styles.heading} ${styles[type]}`}>
                    {children}
                </h1>
            )
        case "secondary":
            return (
                <h2 className={`${styles.heading} ${styles[type]}`}>
                    {children}
                </h2>
            )
        case "tertiary":
            return (
                <h3 className={`${styles.heading} ${styles[type]}`}>
                    {children}
                </h3>
            )
        default:
            console.log("Invalid prop 'type' for component Heading")
            break;
    }
}

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
}

export default Heading;