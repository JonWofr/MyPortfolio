import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import styles from './CustomLink.module.scss';

const CustomLink = ({ children, size, to, colorScheme, disabled }) => (
        <Link className={`${styles.customLink} ${styles[size]} ${styles[colorScheme]}`} to={to}>
            {children}
        </Link>
)

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
    colorScheme: PropTypes.string,
    disabled: PropTypes.bool
}

CustomLink.defaultProps = {
    size: "fluid",
    colorScheme: "primaryAccent",
    disabled: false
}



export default CustomLink;