import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Presentational Components
import Input from '../Input';
import Select from '../Select';

// Styles
import styles from './TableRow.module.scss';

const TableRow = ({ tableRowId, data, formElementDefinitions, isEditable, onChangeColumnValue, onClickDelete, onClickEdit, onClickSave, onClickShowParagraphs, colorMode }) => (
    <tr className={`${styles.tableRow} ${styles[colorMode]}`}>
        {formElementDefinitions.map((formElementDefinition, columnIndex) => {
            const { name, label, element, elementAttributes } = formElementDefinition;

            let value = data[name];

            const { required } = elementAttributes;

            switch (element) {
                case "input":
                    if (typeof (value) === "object" && value.length > 0) {
                        value = value.join(", ");
                    }

                    let type;
                    if (name === "_id" && tableRowId === "newResource") {
                        type = "hidden"
                    }
                    else {
                        type = elementAttributes.type;
                    }

                    return (
                        <td key={columnIndex}>
                            <Input
                                placeholder={label}
                                form={`form${tableRowId}`}
                                disabled={!isEditable}
                                value={value}
                                required={required}
                                type={type}
                                size="fluid"
                                onChange={(e) => onChangeColumnValue(name, e.target.value)}
                                colorMode={colorMode}
                            />
                        </td>
                    )
                case "select":
                    const { options, defaultValue, mode } = elementAttributes;
                    return (
                        <td key={columnIndex}>
                            <Select
                                placeholder={label}
                                form={`form${tableRowId}`}
                                disabled={!isEditable}
                                selectedValue={value}
                                defaultValue={defaultValue}
                                required={required}
                                mode={mode}
                                options={options}
                                size="fluid"
                                onChangeValue={(value) => onChangeColumnValue(name, value)}
                                colorMode={colorMode}
                            />
                        </td>
                    )
                default:
                    console.log(`The element ${element} is not known and cannot be rendered`);
                    return <Fragment />;
            }
        })}
        <td>
            <div className={styles.controls}>
                <button onClick={onClickShowParagraphs}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </button>
                {!isEditable &&
                    <button onClick={onClickEdit}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                }
                {isEditable &&
                    <Fragment>
                        <button onClick={onClickEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        </button>
                        <button type="submit" form={`form${tableRowId}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        </button>
                        <button onClick={onClickDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        </button>
                    </Fragment>
                }
            </div>

        </td>
        {
            // TODO There has to be a better solution than defining below form inside a tableData element due to invalidHTMLNesting
        }
        <td>
            <form id={`form${tableRowId}`} onSubmit={(e) => {
                e.preventDefault();
                onClickSave();
            }} />
        </td>
    </tr>
)


TableRow.propTypes = {
    tableRowId: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
    formElementDefinitions: PropTypes.arrayOf(PropTypes.exact({
        name: PropTypes.string,
        label: PropTypes.string,
        element: PropTypes.string,
        elementAttributes: PropTypes.object
    })).isRequired,
    isEditable: PropTypes.bool.isRequired,
    onChangeColumnValue: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onClickShowParagraphs: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

TableRow.defaultProps = {
    colorMode: "light"
}

export default TableRow;