import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Checkbox.module.scss';

const Checkbox = ({ isChecked, onChange, id, colorScheme }) => (
    <input
        className={`${styles.checkbox} ${styles[colorScheme]}`}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id={id}
    />
)

Checkbox.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    id: PropTypes.string,
    colorScheme: PropTypes.oneOf(["primaryAccent", "secondaryAccent"])
};

Checkbox.defaultProps = {
    onChange: (e) => console.info("No onChangeHandler specified fot component Checkbox"),
    colorScheme: "primaryAccent"
}

export default Checkbox;