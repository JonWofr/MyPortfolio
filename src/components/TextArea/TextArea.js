import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './TextArea.module.scss';

const TextArea = ({ form, disabled, size, onChange, value, required, id, placeholder, colorMode }) => (
        <div className={`${styles.textArea} ${styles[size]} ${styles[colorMode]}`}>
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

TextArea.propTypes = {
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

TextArea.defaultProps = {
    size: "medium",
    form: "",
    disabled: false,
    onChange: () => { console.log("textarea's value with no specified onChangeHandler has been changed") },
    required: false,
    id: "",
    colorMode: "light"
}

export default TextArea;