import { storiesOf } from '@storybook/react';
import React from 'react';

// Presentational Components
import TableRow from './TableRow.js'

import { projectOverviewFormElementDefinitions } from '../../models/formElementDefinitions';

const onChangeColumnValue = () => {
    console.log("onChangeValue Cb working")
}

const onClickDelete = () => {
    console.log("onClickDelete Cb working")
}

const onClickEdit = () => {
    console.log("onClickEdit Cb working");
}

const onClickSave = () => {
    console.log("onClickSave Cb working")
}

const onClickShowParagraphs = () => {
    console.log("onClickShowParagraphs Cb working")
}

const data = {
    "_id": "5de3eb515ffe02033cd4be8f",
    "projectName": "sdfsadf",
    "categories": ["web"],
    "languages": ["java"],
    "technologies": ["scss"],
    "teamMembers": ["sdfd"],
    "startDate": "2423-03-31",
    "endDate": "42243-03-24",
    "gitRepoLink": "",
    "paragraphs": [{
        "heading": "",
        "description": "",
        "image": {
            "position": "",
            "url": "http://localhost:2019/image_uploads/",
            "dataUrl": null
        }
    }]
}

storiesOf('TableRow', module)
    .add('Default', () => (
        <TableRow
            tableRowId="id"
            data={data}
            formElementDefinitions={projectOverviewFormElementDefinitions}
            isEditable={true}
            onChangeColumnValue={onChangeColumnValue}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            onClickSave={onClickSave}
            onClickShowParagraphs={onClickShowParagraphs}
        />
    ))