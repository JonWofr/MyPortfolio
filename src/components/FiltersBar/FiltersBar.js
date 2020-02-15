import React from 'react';
import PropTypes from 'prop-types';

// Components
import CheckboxListDropdown from '../CheckboxListDropdown';
import SearchField from '../SearchField';

// Styles
import styles from './FiltersBar.module.scss';

const FiltersBar = ({ filters, onChangeCheckbox, searchFieldValue, onChangeSearchField }) => {
    return (
        <div className={styles.filtersBar}>
            <div className={styles.checkboxListDropdownsContainer}>
                {filters.map(({ listName, listItems, checkedCheckboxesCount }, filterIndex) => (
                    <div className={styles.checkboxListDropdownContainer}>
                        <CheckboxListDropdown
                            key={filterIndex}
                            listName={listName}
                            listItems={listItems}
                            onChangeCheckbox={checkboxIndex => onChangeCheckbox(filterIndex, checkboxIndex)}
                            checkedCheckboxesCount={checkedCheckboxesCount}
                        />
                    </div>
                ))}
            </div>
            <div>
                <SearchField
                    value={searchFieldValue}
                    onChagne={onChangeSearchField}
                />
            </div>
        </div>
    );
};

FiltersBar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.exact({
        listName: PropTypes.string,
        listItems: PropTypes.arrayOf(PropTypes.exact({
            name: PropTypes.string,
            isChecked: PropTypes.bool
        })),
        checkedCheckboxesCount: PropTypes.number
    })).isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    searchFieldValue: PropTypes.string.isRequired,
    onChangeSearchField: PropTypes.func.isRequired
};

export default FiltersBar;