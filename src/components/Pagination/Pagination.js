import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Pagination.module.scss';

const Pagination = ({ page, lastPage, onClickPage }) => (
    <div id={styles.pagination}>
        {hasPrevious(page) &&
            <button onClick={() => onClickPage(page - 1)}>
                <i className="material-icons">
                    arrow_left
                </i>
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
                <i className="material-icons">
                    arrow_right
                </i>
            </button>
        }
    </div>
);

const hasPrevious = (page) => page > 1 ? true : false;

const hasNext = (page, lastPage) => lastPage > page ? true : false;

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    onClickPage: PropTypes.func.isRequired
};

export default Pagination;