import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './CheckboxList.module.scss';

// Components
import Checkbox from '../Checkbox';

const CheckboxList = ({ items, onChangeCheckbox, colorScheme }) => (
    <ul className={`${styles.checkboxList} ${styles[colorScheme]}`}>
        {items.map(({ value, label, isChecked }, itemIndex) => (
            <li key={itemIndex}>
                <div className={styles.checkboxContainer}>
                    <Checkbox
                        id={`${value}${itemIndex}`}
                        isChecked={isChecked}
                        onChange={({ target: { checked: isChecked } }) => onChangeCheckbox(value, isChecked)}
                        colorScheme={colorScheme === "light" ? "primaryAccent" : "secondaryAccent"}
                    />
                </div>
                <label htmlFor={`${value}${itemIndex}`}>
                    {label}
                </label>
            </li>
        ))}
    </ul>
);

CheckboxList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        value: PropTypes.string,
        label: PropTypes.string,
        isChecked: PropTypes.bool
    })).isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    colorScheme: PropTypes.oneOf(["light", "dark"])
};

CheckboxList.defaultProps = {
    colorScheme: "light"
}

export default CheckboxList;