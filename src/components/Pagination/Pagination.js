import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Pagination.module.scss';

const Pagination = ({ page, lastPage, onClickPage, colorMode }) => (
    <div className={`${styles.pagination} ${styles[colorMode]}`}>
        {hasPrevious(page) &&
            <button onClick={() => onClickPage(page - 1)}>
                <svg className={styles.arrowLeft} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
            </button>
        }
        <ul>
            {new Array(lastPage).fill(undefined).map((_, index) => (
                <li key={index} className={page - 1 === index ? styles.selected : ""}>
                    <button disabled={page === index + 1 ? true : false} onClick={() => onClickPage(index + 1)}>
                        {index + 1}
                    </button>
                </li>
            ))}
        </ul>
        {hasNext(page, lastPage) &&
            <button onClick={() => onClickPage(page + 1)}>
                <svg className={styles.arrowRight} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                </svg>
            </button>
        }
    </div>
);

const hasPrevious = (page) => page > 1 ? true : false;

const hasNext = (page, lastPage) => lastPage > page ? true : false;

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    onClickPage: PropTypes.func.isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
};

Pagination.defaultProps = {
    colorMode: "light"
}

export default Pagination;