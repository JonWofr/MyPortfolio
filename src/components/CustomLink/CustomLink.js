import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import styles from './CustomLink.module.scss';

const CustomLink = ({ children, to, color, size, type, colorMode }) => {
    let style;
    if (type === "default") {
        style = {
            backgroundColor: color
        }
    }
    else if (type === "inverted") {
        style = {
            borderColor: color,
            color
        }
    }
    else throw new Error(`Type ${type} is not known`)

    return (
        <Link className={`${styles.customLink} ${styles[size]} ${styles[type]} ${styles[colorMode]}`} style={style} to={to}>
            {children}
        </Link>
    )
}

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    color: PropTypes.string.isRequired,

    size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
    type: PropTypes.oneOf(["default", "inverted"]),
    colorMode: PropTypes.oneOf(["light", "dark"])
}

CustomLink.defaultProps = {
    size: "medium",
    type: "default",
    colorMode: "light"
}



export default CustomLink;