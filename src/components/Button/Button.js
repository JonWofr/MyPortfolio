import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.module.scss';


const Button = ({ form, disabled, type, size, onClickButton, children, colorScheme }) => (
    <button
        form={form}
        disabled={disabled}
        type={type}
        className={`${styles.button} ${styles[size]} ${styles[colorScheme]}`}
        onClick={onClickButton}
    >
        {children}
    </button>
)

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onClickButton: PropTypes.func,
    colorScheme: PropTypes.string
}

Button.defaultProps = {
    size: "fluid",
    form: "",
    disabled: false,
    onClickButton: () => console.log("button with no specified onClickHandler has been clicked"),
    colorScheme: "primaryAccent"
}

export default Button;