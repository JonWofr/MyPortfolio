import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.module.scss';


const Button = ({ form, disabled, type, size, onClickButton, children, colorScheme }) => (
            <button form={form} disabled={disabled} type={type} className={`${styles.button} ${styles[size]} ${styles[colorScheme]}`} onClick={onClickButton}>
                <span>
                {children}
                </span>
            </button>
    )

Button.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onClickButton: PropTypes.func,
    colorScheme: PropTypes.string
}

Button.defaultProps = {
    form: "",
    disabled: false,
    onClickButton: () => console.log("button with no specified onClickHandler has been clicked"),
    colorScheme: "default-secondary"
}

export default Button;