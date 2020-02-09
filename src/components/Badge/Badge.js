import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Badge.module.scss';

const Badge = ({ children, colorMode }) => (
    <div className={`${styles.badge} ${styles[colorMode]}`}>
        {children}
    </div>
);

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
};

Badge.defaultProps = {
    colorMode: "light"
}

export default Badge;