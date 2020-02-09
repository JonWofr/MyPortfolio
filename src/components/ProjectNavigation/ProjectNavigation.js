import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './ProjectNavigation.module.scss';

const ProjectNavigation = ({ onClickArrowUpButton, onClickArrowDownButton, colorMode }) => {
    return (
        <div className={`${styles.projectNavigation} ${styles[colorMode]}`}>
            <button onClick={onClickArrowUpButton}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
            <button onClick={onClickArrowDownButton}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
            </button>
        </div>
    );
};

ProjectNavigation.propTypes = {
    onClickArrowUpButton: PropTypes.func.isRequired,
    onClickArrowDownButton: PropTypes.func.isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
};

ProjectNavigation.defaultProps = {
    colorMode: "light"
}

export default ProjectNavigation;