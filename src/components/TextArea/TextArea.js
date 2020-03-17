import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './TextArea.module.scss';

const CustomTextArea = ({ form, disabled, size, onChange, value, required, id, placeholder, colorMode }) => (
        <div className={`${styles.customTextArea} ${styles[size]} ${styles[colorMode]}`}>
            <textarea
                form={form}
                disabled={disabled}
                onChange={onChange}
                value={value}
                required={required}
                id={id}
            />
            <label>
                <span className={styles.labelContent}>
                    {placeholder}
                </span>
            </label>
        </div>
    )

CustomTextArea.propTypes = {
    value: PropTypes.string.isRequired,

    size: PropTypes.string,
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    id: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

CustomTextArea.defaultProps = {
    size: "medium",
    form: "",
    disabled: false,
    onChange: () => {},
    required: false,
    id: "",
    colorMode: "light"
}

export default CustomTextArea;