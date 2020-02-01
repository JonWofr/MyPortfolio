import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Presentational Components
import Input from '../Input';
import Select from '../Select';

// Styles
import styles from './TableRow.module.scss';

const TableRow = ({ tableRowId, data, formElementDefinitions, isEditable, onChangeColumnValue, onClickDelete, onClickEdit, onClickSave, onClickShowParagraphs }) => (
    <tr className={styles.tableRow}>
        {formElementDefinitions.map((formElementDefinition, columnIndex) => {
            const { propertyName, element, elementAttributes } = formElementDefinition;

            let value = data[propertyName];

            const { required } = elementAttributes;

            switch (element) {
                case "input":
                    if (typeof (value) === "object" && value.length > 0) {
                        value = value.join(", ");
                    }

                    let type;
                    if (propertyName === "_id" && tableRowId === "newResource") {
                        type = "hidden"
                    }
                    else {
                        type = elementAttributes.type;
                    }

                    return (
                        <td key={columnIndex}>
                            <Input
                                placeholder={propertyName}
                                form={`form${tableRowId}`}
                                disabled={!isEditable}
                                value={value}
                                required={required}
                                type={type}
                                size="fluid"
                                onChange={(e) => onChangeColumnValue(propertyName, e.target.value)}
                            />
                        </td>
                    )
                case "select":
                    const { options, defaultValue, mode } = elementAttributes;
                    return (
                        <td key={columnIndex}>
                            <Select
                                placeholder={propertyName}
                                form={`form${tableRowId}`}
                                disabled={!isEditable}
                                selectedValue={value}
                                defaultValue={defaultValue}
                                required={required}
                                mode={mode}
                                options={options}
                                size="fluid"
                                onChangeValue={(value) => onChangeColumnValue(propertyName, value)}
                            />
                        </td>
                    )
                default:
                    console.log(`The element ${element} is not known and cannot be rendered`);
                    return <span />;
            }
        })}
        <td>
            <div className={styles.controls}>
                <button onClick={onClickShowParagraphs}>
                    <i className="material-icons">
                        comment
                        </i>
                </button>
                {!isEditable &&
                    <button onClick={onClickEdit}>
                        <i className="material-icons">
                            edit
                         </i>
                    </button>
                }
                {isEditable &&
                    <Fragment>
                        <button onClick={onClickEdit}>
                            <i className="material-icons">
                                cancel
                                </i>
                        </button>
                        <button type="submit" form={`form${tableRowId}`}>
                            <i className="material-icons">
                                save
                                    </i>
                        </button>
                        <button onClick={onClickDelete}>
                            <i className="material-icons">
                                delete_forever
                                    </i>
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
        propertyName: PropTypes.string,
        element: PropTypes.string,
        elementAttributes: PropTypes.object
    })).isRequired,
    isEditable: PropTypes.bool.isRequired,
    onChangeColumnValue: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onClickShowParagraphs: PropTypes.func.isRequired,

    onClickDelete: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired
}

TableRow.defaultProps = {
    onClickDelete: () => console.info("No onClickDelete Handler defined"),
    onClickEdit: () => console.info("No onClickEdit Handler defined")
}

export default TableRow;