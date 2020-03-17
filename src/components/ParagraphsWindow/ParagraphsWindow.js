import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './ParagraphsWindow.module.scss';

// Components
import CustomInput from '../CustomInput';
import CustomSelect from '../Select';
import CustomTextArea from '../TextArea';
import Heading from '../Heading';

// Constants
const imagePositionSelectValues = [{
    value: "left",
    label: "left"
}, {
    value: "center",
    label: "center"
}, {
    value: "right",
    label: "right"
}];

const ParagraphsWindow = ({ isEditable, paragraphs, onChangeValue, onClickAddNewParagraph, onClickRemoveParagraph, colorMode }) => (
    <div className={`${styles.paragraphsWindow} ${styles[colorMode]}`}>
        {paragraphs && paragraphs.map((paragraph, index) => {
            const { heading, description, image } = paragraph;
            return (
                <div key={index} className={styles.paragraphContainer}>
                    <div className={styles.topRow}>
                        <Heading type="secondary" colorMode={colorMode}>
                            {`${index + 1}. Paragraph`}
                        </Heading>
                        <button disabled={!isEditable} type="button" onClick={(e) => onClickRemoveParagraph(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                        </button>
                    </div>
                    {
                        renderParagraphInputFields(heading, description, (fieldName, value) => onChangeValue(index, fieldName, value), !isEditable, colorMode)
                    }
                    {
                        image && renderImageInputFields(image, (fieldName, value) => onChangeValue(index, fieldName, value), !isEditable, colorMode)
                    }
                    <button disabled={!isEditable} type="button" onClick={onClickAddNewParagraph}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </div>
            )
        })}
    </div>
)

const renderParagraphInputFields = (heading, description, onChangeValue, disabled, colorMode) => (
    <Fragment>
        <CustomInput
            type="text"
            size="fluid"
            value={heading}
            disabled={disabled}
            onChange={(e) => onChangeValue("heading", e.target.value)}
            placeholder={"Heading"}
            colorMode={colorMode}
        />
        <div className={styles.textAreaContainer}>
            <CustomTextArea
                type="text"
                size="fluid"
                value={description}
                disabled={disabled}
                onChange={(e) => onChangeValue("description", e.target.value)}
                placeholder={"Description"}
                colorMode={colorMode}
            />
        </div>
    </Fragment>
)

const renderImageInputFields = (image, onChangeValue, disabled, colorMode) => (
    <Fragment>
        <CustomSelect
            id="paragraphImagePosition"
            options={imagePositionSelectValues}
            selectedValue={image.position}
            onChangeValue={(value) => onChangeValue("position", value)}
            disabled={disabled}
            mode="single"
            size="fluid"
            placeholder="Image-Position"
            colorMode={colorMode}
        />
        <CustomInput
            type="text"
            size="fluid"
            value={image.url}
            disabled={true}
            placeholder={"Image-URL"}
            colorMode={colorMode}
        />
        <CustomInput
            id="paragraphImageFilePicker"
            type="file"
            size="fluid"
            onChange={(e) => onChangeValue("dataUrl", e.target.files[0])}
            disabled={disabled}
            colorMode={colorMode}
        />
    </Fragment>
)

ParagraphsWindow.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeValue: PropTypes.func.isRequired,
    onClickAddNewParagraph: PropTypes.func.isRequired,
    onClickRemoveParagraph: PropTypes.func.isRequired,
    isEditable: PropTypes.bool,
    colorMode: PropTypes.oneOf(["light", "dark"])
}

ParagraphsWindow.defaultProps = {
    isEditable: true,
    colorMode: "light"
}

export default ParagraphsWindow;