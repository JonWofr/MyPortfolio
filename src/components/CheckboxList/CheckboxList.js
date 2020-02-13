import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './CheckboxList.module.scss';

// Components
import Checkbox from '../Checkbox';

const CheckboxList = ({ items, onChangeCheckbox }) => (
    <ul className={styles.checkboxList}>
        {items.map(({ name, isChecked }, itemIndex) => (
            <li key={itemIndex}>
                <div className={styles.checkboxContainer}>
                    <Checkbox
                        isChecked={isChecked}
                        onChange={(e) => onChangeCheckbox(itemIndex, e.target.value)}
                        id={`${name}${itemIndex}`}
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
    onChangeCheckbox: PropTypes.func.isRequired
};

export default CheckboxList;