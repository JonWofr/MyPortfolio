import React from 'react';
import PropTypes from 'prop-types';

// Components
import Badge from '../Badge';

// Styles
import styles from './BadgeList.module.scss';

const BadgeList = ({ items, direction, colorMode }) => {
    return (
        <div className={`${styles.badgeList} ${styles[direction]}`}>
            {items.map((item, index) => (
                <div className={styles.badgeContainer}>
                    <Badge key={index} colorMode={colorMode}>
                        {item}
                    </Badge>
                </div>
            ))}
        </div>
    );
};

BadgeList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    direction: PropTypes.string,
    colorMode: PropTypes.oneOf(["light", "dark"])
};

BadgeList.defaultProps = {
    direction: "horizontal",
    colorMode: "light"
}

export default BadgeList;