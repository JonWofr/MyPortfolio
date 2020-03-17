import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Toast.module.scss';

// Components
import Heading from '../Heading';

const Toast = ({ heading, description, type, colorMode }) => (
    <div className={`${styles.toast} ${styles[type]} ${styles[colorMode]}`}>
        <Heading type="quatenary" colorMode={colorMode}>
            {heading}
        </Heading>
        <p>
            {description}
        </p>
    </div>
)

Toast.propTypes = {
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.oneOf(["success", "info", "warn", "error"]).isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

Toast.defaultProps = {
    colorMode: "light"
}

export default Toast;