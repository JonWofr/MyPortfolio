import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Select.module.scss';

const Select = ({ form, disabled, required, selectedValue, options, mode, size, onChangeValue, id, placeholder }) => {
    switch (mode) {
        case "single":
            return (
                <div className={`${styles.select} ${styles[size]}`}>
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
                <div className={`${styles.select} ${styles[size]}`}>
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
                                    <span className={`${disabled ? styles.disabled : styles.enabled}`}>
                                        {textNode}
                                    </span>
                                    <button
                                        disabled={disabled}
                                        type="button"
                                        onClick={() => onClickDeleteListItem(selectedValue, index, onChangeValue)}
                                    >
                                        <i disabled={disabled} className="material-icons">
                                            delete
                                        </i>
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
    placeholder: PropTypes.string
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
    placeholder: "placeholder"
}

export default Select;