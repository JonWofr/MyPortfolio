import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './CheckboxList.module.scss';

// Components
import Checkbox from '../Checkbox';

const CheckboxList = ({ items, onChangeCheckbox, colorScheme }) => (
    <ul className={`${styles.checkboxList} ${styles[colorScheme]}`}>
        {items.map(({ name, isChecked }, itemIndex) => (
            <li key={itemIndex}>
                <div className={styles.checkboxContainer}>
                    <Checkbox
                        isChecked={isChecked}
                        onChange={(e) => onChangeCheckbox(itemIndex, e.target.value)}
                        id={`${name}${itemIndex}`}
                        colorScheme={colorScheme === "light" ? "primaryAccent" : "secondaryAccent"}
                    />
                </div>
                <label htmlFor={`${name}${itemIndex}`}>
                    {name}
                </label>
            </li>
        ))}
    </ul>
);

CheckboxList.propTypes = {
    items: PropTypes.exact({
        name: PropTypes.string,
        isChecked: PropTypes.bool
    }).isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    colorScheme: PropTypes.oneOf(["light", "dark"])
};

CheckboxList.defaultProps = {
    colorScheme: "light"
}

export default CheckboxList;