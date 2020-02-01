import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import styles from './CustomLink.module.scss';

const CustomLink = ({children, size, to}) => (
        <div className={`${styles.customLink} ${styles[size]}`}>
            <Link to={to} className="customLink">{children}</Link>
        </div>
    )

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.string.isRequired,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default CustomLink;