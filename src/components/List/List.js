import React from 'react';
import PropTypes from 'prop-types';

//Styling
import styles from './List.module.scss';

const List = ({ items }) => (
    <ul className={styles.list}>
        {items.map((item, index) => {
            if (index !== items.length - 1) {
                return (
                    <li key={index}>
                        {item + ", "}
                    </li>
                )
            }
            else return (
                <li key={index}>
                    {item}
                </li>
            )
        })}
    </ul>
)

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List;