import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import styles from './CustomLink.module.scss';

const CustomLink = ({ children, to, backgroundColor, fontColor, size, type }) => {
    let style;
    if (type === "default") {
        style = {
            backgroundColor,
            color: fontColor
        }
    }
    else if (type === "inverted") {
        style = {
            borderColor: backgroundColor,
            color: fontColor
        }
    }
    else throw new Error(`Type ${type} is not known`)

    return (
        <Link className={`${styles.customLink} ${styles[size]} ${styles[type]}`} style={style} to={to}>
            {children}
        </Link>
    )
}

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    backgroundColor: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired,
    
    size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
    type: PropTypes.oneOf(["default", "inverted"])
}

CustomLink.defaultProps = {
    size: "medium",
    type: "default"
}



export default CustomLink;