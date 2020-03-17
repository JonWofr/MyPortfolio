import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './CustomInput.module.scss';

const CustomInput = (props) => {
    const { type, placeholder, size, colorMode } = props;
    // Input type hidden needs a special workaround to be displayed properly
    return (
        <div className={`${styles.customInput} ${styles[size]} ${styles[colorMode]}`}>
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
            console.warn(`Input type ${type} is not known`);
    }
}

CustomInput.propTypes = {
    type: PropTypes.string.isRequired,

    size: PropTypes.string,
    value: PropTypes.any,
    form: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    id: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

CustomInput.defaultProps = {
    size: "medium",
    value: "",
    form: undefined,
    disabled: false,
    onChange: () => {},
    placeholder: "",
    required: false,
    id: undefined,
    colorMode: "light"
}

export default CustomInput;