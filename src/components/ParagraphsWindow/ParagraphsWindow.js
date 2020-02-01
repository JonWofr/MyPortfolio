import React, { Fragment } from 'react';
import propTypes from 'prop-types';

// Styles
import styles from './ParagraphsWindow.module.scss';

// Presentational Components
import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';

// Constants
const imagePositionSelectValues = [{
    value: "left",
    textNode: "left"
}, {
    value: "center",
    textNode: "center"
}, {
    value: "right",
    textNode: "right"
}];

const ParagraphsWindow = (props) => {
    const { isEditable, paragraphs, onChangeValue, onClickAddNewParagraph, onClickRemoveParagraph } = props;
    return (
        <div className={styles.paragraphsWindow}>
            {paragraphs && paragraphs.map((paragraph, index) => {
                const { heading, description, image } = paragraph;
                return (
                    <div key={index} className={styles.paragraphContainer}>
                        <div>
                            <h2>
                                {`${index + 1}. Paragraph`}
                            </h2>
                            <button className={styles.deleteButton} disabled={!isEditable} type="button" onClick={(e) => onClickRemoveParagraph(index)}>
                                <i className="material-icons">delete</i>
                            </button>
                        </div>
                        {
                            renderParagraphInputFields(heading, description, (fieldName, value) => onChangeValue(index, fieldName, value), !isEditable)
                        }
                        {
                            image && renderImageInputFields(image, (fieldName, value) => onChangeValue(index, fieldName, value), !isEditable)
                        }
                        <button disabled={!isEditable} type="button" onClick={onClickAddNewParagraph} className={styles.addButton}>
                            <i className="material-icons">
                                add
                            </i>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

const renderParagraphInputFields = (heading, description, onChangeValue, disabled) => (
    <Fragment>
        <Input
            type="text"
            size="fluid"
            value={heading}
            disabled={disabled}
            onChange={(e) => onChangeValue("heading", e.target.value)}
            placeholder={"Heading"}
        />
        <div className={styles.textAreaContainer}>
            <TextArea
                type="text"
                size="fluid"
                value={description}
                disabled={disabled}
                onChange={(e) => onChangeValue("description", e.target.value)}
                placeholder={"Description"}
            />
        </div>
    </Fragment>
)

const renderImageInputFields = (image, onChangeValue, disabled) => (
    <Fragment>
        <Select
            id="paragraphImagePosition"
            options={imagePositionSelectValues}
            selectedValue={image.position}
            onChangeValue={(value) => onChangeValue("position", value)}
            disabled={disabled}
            mode="single"
            size="fluid"
            placeholder="Image-Position"
        />
        <Input
            type="text"
            size="fluid"
            value={image.url}
            disabled={true}
            placeholder={"Image-URL"}
        />
        <Input
            id="paragraphImageFilePicker"
            type="file"
            size="fluid"
            onChange={(e) => onChangeValue("dataUrl", e.target.files[0])}
            disabled={disabled}
        />
    </Fragment>
)

ParagraphsWindow.propTypes = {
    paragraphs: propTypes.arrayOf(propTypes.object).isRequired,
    onChangeValue: propTypes.func.isRequired,
    onClickAddNewParagraph: propTypes.func.isRequired,
    onClickRemoveParagraph: propTypes.func.isRequired,

    isEditable: propTypes.bool
}

ParagraphsWindow.defaultProps = {
    isEditable: true
}

export default ParagraphsWindow;