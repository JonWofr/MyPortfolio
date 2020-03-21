import { storiesOf } from '@storybook/react';
import React from 'react';

// Components
import TableRow from './TableRow.js'

// Utils
import { parseShallowPropsObjectToPropsString } from '../../utils/parser';

// MockingData
import { projectsOverviewFormElementDefinitions } from '../../models/formElementDefinitions';
export const mockingData = {
    componentName: "TableRow",
    Component: TableRow,
    stories: [{
        tableRowId: "5de3eb515ffe02033cd4be8f",
        data: {
            "tableRowId": "5de3eb515ffe02033cd4be8f",
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
                    "url": "http://localhost:2019/image-uploads/"
                }
            }]
        },
        formElementDefinitions: projectsOverviewFormElementDefinitions,
        isEditable: true,
        onChangeColumnValue: () => { },
        onClickDelete: () => { },
        onClickEdit: () => { },
        onClickSave: () => { },
        onClickShowParagraphs: () => { }
    }, {
        tableRowId: "5de3eb515ffe02033cd4be8f",
        data: {
            "tableRowId": "5de3eb515ffe02033cd4be8f",
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
                    "url": "http://localhost:2019/image-uploads/"
                }
            }]
        },
        formElementDefinitions: projectsOverviewFormElementDefinitions,
        isEditable: true,
        onChangeColumnValue: () => { },
        onClickDelete: () => { },
        onClickEdit: () => { },
        onClickSave: () => { },
        onClickShowParagraphs: () => { },
        colorMode: "dark"
    }, {
        tableRowId: "5de3eb515ffe02033cd4be8f",
        data: {
            "tableRowId": "5de3eb515ffe02033cd4be8f",
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
                    "url": "http://localhost:2019/image-uploads/"
                }
            }]
        },
        formElementDefinitions: projectsOverviewFormElementDefinitions,
        isEditable: false,
        onChangeColumnValue: () => { },
        onClickDelete: () => { },
        onClickEdit: () => { },
        onClickSave: () => { },
        onClickShowParagraphs: () => { }
    }]
}

mockingData.stories.forEach(story => storiesOf(mockingData.componentName, module).add(parseShallowPropsObjectToPropsString(story), () => (
    <table>
        <tbody>
            <mockingData.Component {...story} />
        </tbody>
    </table>
)))