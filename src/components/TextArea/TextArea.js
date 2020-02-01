import React from 'react';
import propTypes from 'prop-types';

// Styles
import styles from './TextArea.module.scss';

const TextArea = (props) => {
    const { form, disabled, size, onChange, value, required, id, placeholder } = props;
    return (
        <div className={`${styles.textArea} ${styles[size]}`}>
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
}

TextArea.propTypes = {
    value: propTypes.string.isRequired,

    size: propTypes.string,
    form: propTypes.string,
    disabled: propTypes.bool,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    required: propTypes.bool,
    id: propTypes.string
}

TextArea.defaultProps = {
    size: "medium",
    value: "",
    form: "",
    disabled: false,
    onChange: () => { console.log("textarea's value with no specified onChangeHandler has been changed") },
    required: false,
    id: ""
}

export default TextArea;