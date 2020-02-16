import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import CheckboxList from '../CheckboxList';

// Styles
import styles from './CheckboxListDropdown.module.scss';

const CheckboxListDropdown = ({ name, label, listItems, onChangeCheckbox, checkedCheckboxesCount, colorScheme }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`${styles.checkboxListDropdown} ${styles[colorScheme]}`}>
            <button className={isExpanded ? styles.expanded : ""} onClick={() => setIsExpanded(!isExpanded)}>
                <div className={styles.listName}>
                    {label}
                    {checkedCheckboxesCount > 0 ? ` (${checkedCheckboxesCount})` : ""}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
            </button>
            <div className={`${styles.checkboxListContainer} ${isExpanded ? styles.expanded : ""}`}>
                    <CheckboxList
                        items={listItems}
                        onChangeCheckbox={(value, isChecked) => onChangeCheckbox(name, value, isChecked)}
                        colorScheme={colorScheme}
                    />
            </div>
        </div>
    );
};

CheckboxListDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.exact({
        value: PropTypes.string,
        label: PropTypes.string,
        isChecked: PropTypes.bool
    })).isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    checkedCheckboxesCount: PropTypes.number.isRequired,
    colorScheme: PropTypes.oneOf(["light", "dark"])
};

CheckboxListDropdown.defaultProps = {
    colorScheme: "light"
}

export default CheckboxListDropdown;