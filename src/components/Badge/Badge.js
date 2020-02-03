import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Badge.module.scss';

const Badge = ({ children }) => (
    <div className={styles.badge}>
        {children}
    </div>
);

Badge.propTypes = {
    children: PropTypes.node.isRequired
};

export default Badge;