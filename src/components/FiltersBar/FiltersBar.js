import React from 'react';
import PropTypes from 'prop-types';

// Components
import CheckboxListDropdown from '../CheckboxListDropdown';
import SearchField from '../SearchField';

// Styles
import styles from './FiltersBar.module.scss';

const FiltersBar = ({ filters, onChangeCheckbox, searchFieldValue, onChangeSearchFieldValue, onClickClearFiltersButton, colorScheme }) => {
    return (
            <div className={`${styles.filtersBar} ${styles[colorScheme]}`}>
            <div className={styles.checkboxListDropdownsContainer}>
                {filters.map(({ name, label, listItems, checkedCheckboxesCount }, filterIndex) => (
                    <div key={filterIndex} className={styles.checkboxListDropdownContainer}>
                        <CheckboxListDropdown
                            key={filterIndex}
                            name={name}
                            label={label}
                            listItems={listItems}
                            onChangeCheckbox={(name, value, isChecked) => onChangeCheckbox(name, value, isChecked)}
                            checkedCheckboxesCount={checkedCheckboxesCount}
                            colorScheme={colorScheme}
                        />
                    </div>
                ))}
                <button className={styles.clearFilters} onClick={onClickClearFiltersButton}>
                    Clear All
                </button>
            </div>
            <div>
                <SearchField
                    value={searchFieldValue}
                    onChangeValue={onChangeSearchFieldValue}
                    colorScheme={colorScheme}
                />
            </div>
        </div>
    );
};

FiltersBar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        label: PropTypes.string,
        listItems: PropTypes.arrayOf(PropTypes.exact({
            value: PropTypes.string,
            label: PropTypes.string,
            isChecked: PropTypes.bool
        })),
        checkedCheckboxesCount: PropTypes.number
    })).isRequired,
    onChangeCheckbox: PropTypes.func.isRequired,
    searchFieldValue: PropTypes.string.isRequired,
    onChangeSearchFieldValue: PropTypes.func.isRequired,
    onClickClearFiltersButton: PropTypes.func.isRequired,
    colorScheme: PropTypes.oneOf(["light", "dark"])
};

FiltersBar.defaultProps = {
    colorScheme: "light"
}

export default FiltersBar;