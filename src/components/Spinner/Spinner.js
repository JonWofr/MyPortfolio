import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Spinner.module.scss';

const Spinner = ({ colorMode }) => (
        <div className={`${styles.spinner} ${styles[colorMode]}`}>
            <div />
            <div />
            <div />
            <div />
        </div>
)

Spinner.propTypes = {
    colorMode: PropTypes.oneOf(["light", "dark"])
}

Spinner.defaultProps = {
    colorMode: "light"
}


export default Spinner;