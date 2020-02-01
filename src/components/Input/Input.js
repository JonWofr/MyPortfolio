import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Input.module.scss';

const Input = (props) => {
    const { type, placeholder, size } = props;
    // Input type hidden needs a special workaround to be displayed properly
    return (
        <div className={`${styles.input} ${styles[size]}`}>
            {getInputTagViaProps(props)}
            {type !== "hidden"  &&
                <label>
                    <span className={styles.labelContent}>
                        {placeholder}
                    </span>
                </label>
            }
        </div>
    )
}

const getInputTagViaProps = (props) => {
    const { type, form, disabled, onChange, value, required, id } = props;
    switch (type) {
        case "file":
        case "date":
        case "text":
            return (
                <input
                    form={form}
                    disabled={disabled}
                    type={type}
                    onChange={onChange}
                    value={value}
                    required={required}
                    id={id}
                />
            )
        case "hidden":
            return (
                <input
                    form={form}
                    type={type}
                    value={value}
                    id={id}
                />
            )
        default:
            return (
                <input
                    form={form}
                    disabled={disabled}
                    type={type}
                    onChange={onChange}
                    value={value}
                    required={required}
                    id={id}
                />
            )
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,

    size: PropTypes.string,
    value: PropTypes.any,
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    id: PropTypes.string
}

Input.defaultProps = {
    size: "medium",
    value: "",
    form: undefined,
    disabled: false,
    onChange: () => { console.log("input's value with no specified onChangeHandler has been changed") },
    placeholder: "",
    required: false,
    id: undefined
}

export default Input;