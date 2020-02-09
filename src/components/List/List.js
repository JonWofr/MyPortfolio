import React from 'react';
import PropTypes from 'prop-types';

//Styling
import styles from './List.module.scss';

const List = ({ items, colorMode }) => (
    <ul className={`${styles.list} ${styles[colorMode]}`}>
        {items.map((item, index) => (
            <li key={index}>
                {index !== items.length - 1 ? `${item}, ` : item}
            </li>
        ))}
    </ul>
)

List.propTypes = {
    items: PropTypes.array.isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

List.defaultProps = {
    colorMode: "light"
}

export default List;