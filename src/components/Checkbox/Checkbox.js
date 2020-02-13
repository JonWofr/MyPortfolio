import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Checkbox.module.scss';

const Checkbox = ({ isChecked, onChange, id }) => (
    <input
        className={styles.checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id={id}
    />
)

Checkbox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    id: PropTypes.string
};

Checkbox.defaultProps = {
    onChange: (e) => console.info("No onChangeHandler specified fot component Checkbox"),
}

export default Checkbox;