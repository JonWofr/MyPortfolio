import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Select.module.scss';

const Select = ({ form, disabled, required, selectedValue, options, mode, size, onChangeValue, id, placeholder, colorMode }) => {
    switch (mode) {
        case "single":
            return (
                <div className={`${styles.select} ${styles[size]} ${styles[colorMode]}`}>
                    <select
                        form={form}
                        disabled={disabled}
                        required={required}
                        value={selectedValue}
                        onChange={(e) => onChangeValue(e.target.value)} id={id}
                    >
                        <option selected value=""></option>
                        {options.map((option, optionIndex) => {
                            const { value, textNode } = option;
                            return <option key={optionIndex} value={value}>{textNode}</option>
                        })}
                    </select>
                    <label>
                        <span className={styles.labelContent}>
                            {placeholder}
                        </span>
                    </label>
                </div>
            )
        case "multi":
            return (
                <div className={`${styles.select} ${styles[size]} ${styles[colorMode]}`}>
                    <select
                        form={form}
                        disabled={disabled}
                        required={required}
                        value={selectedValue.length > 0 ? selectedValue[selectedValue.length - 1] : ""}
                        onChange={(e) => onChangeValueInterceptor(selectedValue, e.target.value, onChangeValue)}
                        id={id}
                    >
                        <option value=""></option>
                        {options.map((option, optionIndex) => {
                            const { value, textNode } = option;
                            return <option key={optionIndex} value={value}>{textNode}</option>
                        })}
                    </select>
                    <label>
                        <span className={styles.labelContent}>
                            {placeholder}
                        </span>
                    </label>
                    <ul>
                        {/*On a Multi-Select the selectedValue prop has multiple values*/}
                        {selectedValue && selectedValue.map((value, index) => {
                            let textNode;
                            options.forEach(option => {
                                if (option.value === value) {
                                    textNode = option.textNode;
                                }
                            })
                            return (
                                <li key={index}>
                                    <span className={disabled ? styles.disabled : styles.enabled}>
                                        {textNode}
                                    </span>
                                    <button disabled={disabled} type="button" onClick={() => onClickDeleteListItem(selectedValue, index, onChangeValue)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                            <path d="M0 0h24v24H0z" fill="none" />
                                        </svg>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )
        default:
            console.log(`The mode of the select ${mode} is not known`);
    }
}

const onClickDeleteListItem = (selectedValue, index, onChangeValueCb) => {
    selectedValue.splice(index, 1);
    onChangeValueCb(selectedValue)
}

const onChangeValueInterceptor = (selectedValue, currentValue, onChangeValueCb) => {
    if (currentValue !== "") {
        const newValue = [...selectedValue, currentValue];
        console.log("Created new value from selection", newValue)
        onChangeValueCb(newValue);
    }
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedValue: PropTypes.any.isRequired,

    onChangeValue: PropTypes.func,
    form: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    mode: PropTypes.string,
    defaultValue: PropTypes.string,
    size: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

Select.defaultProps = {
    onChangeValue: () => { console.log("selects's value with no specified onChangeHandler has been changed") },
    form: undefined,
    disabled: false,
    required: true,
    mode: "single",
    defaultValue: "",
    size: "medium",
    id: undefined,
    placeholder: "placeholder",
    colorMode: "light"
}

export default Select;