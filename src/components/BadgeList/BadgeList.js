import React from 'react';
import PropTypes from 'prop-types';

// Components
import Badge from '../Badge';

// Styles
import styles from './BadgeList.module.scss';

const BadgeList = ({ items, direction }) => {
    return (
        <div className={`${styles.badgeList} ${styles[direction]}`}>
            {items.map((item, index) => (
                <div className={styles.badgeContainer}>
                    <Badge key={index}>
                        {item}
                    </Badge>
                </div>
            ))}
        </div>
    );
};

BadgeList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    direction: PropTypes.string
};

BadgeList.defaultProps = {
    direction: "horizontal"
}

export default BadgeList;