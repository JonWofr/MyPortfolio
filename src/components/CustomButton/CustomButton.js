import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './CustomButton.module.scss';


const CustomButton = ({ form, disabled, type, size, onClickButton, children, colorScheme }) => (
    <button
        form={form}
        disabled={disabled}
        type={type}
        className={`${styles.customButton} ${styles[size]} ${styles[colorScheme]}`}
        onClick={onClickButton}
    >
        {children}
    </button>
)

CustomButton.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onClickButton: PropTypes.func,
    colorScheme: PropTypes.string
}

CustomButton.defaultProps = {
    size: "fluid",
    form: "",
    disabled: false,
    onClickButton: () => {},
    colorScheme: "primaryAccent"
}

export default CustomButton;