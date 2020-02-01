export const projectOverviewFormElementDefinitions = [{
    propertyName: "_id",
    element: "input",
    elementAttributes: {
        type: "text",
        required: false
    }
}, {
    propertyName: "projectName",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    propertyName: "categories",
    element: "select",
    elementAttributes: {
        options: [{
            value: "desktop",
            textNode: "Desktop-App",
        }, {
            value: "web",
            textNode: "Web-App",
        }, {
            value: "iOS",
            textNode: "iOS-App",
        }, {
            value: "android",
            textNode: "Android-App",
        }, {
            value: "conceptsAndPrototypes",
            textNode: "Concepts & Prototypes",
        }, {
            value: "other",
            textNode: "Other",
        }],
        required: true,
        defaultValue: "web",
        mode: "multi"
    }
}, {
    propertyName: "languages",
    element: "select",
    elementAttributes: {
        options: [{
            value: "java",
            textNode: "Java",
        }, {
            value: "javaScript",
            textNode: "JavaScript",
        }, {
            value: "html",
            textNode: "HTML5",
        }, {
            value: "css",
            textNode: "CSS3",
        }, {
            value: "php",
            textNode: "PHP",
        }, {
            value: "swift",
            textNode: "Swift",
        }, {
            value: "kotlin",
            textNode: "Kotlin",
        }, {
            value: "c",
            textNode: "C",
        }, {
            value: "other",
            textNode: "Other",
        }],
        required: true,
        defaultValue: "html",
        mode: "multi"
     }
}, {
    propertyName: "technologies",
    element: "select",
    elementAttributes: {
        options: [{
            value: "mySQL",
            textNode: "MySQL",
        }, {
            value: "sqLite",
            textNode: "SQLite",
        }, {
            value: "oracleSQL",
            textNode: "Oracle SQL",
        }, {
            value: "coreData",
            textNode: "Core Data",
        }, {
            value: "node",
            textNode: "node",
        }, {
            value: "mongoDB",
            textNode: "mongo DB",
        }, {
            value: "react",
            textNode: "React",
        }, {
            value: "angular",
            textNode: "Angular",
        }, {
            value: "express",
            textNode: "Express.js",
        }, {
            value: "scss",
            textNode: "Sass",
        }, {
            value: "xml",
            textNode: "XML",
        }, {
            value: "json",
            textNode: "JSON",
        }, {
            value: "git",
            textNode: "GIT",
        }, {
            value: "other",
            textNode: "Other",
        }],
        required: true,
        defaultValue: "react",
        mode: "multi"
     }
}, {
    propertyName: "teamMembers",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    propertyName: "startDate",
    element: "input",
    elementAttributes: {
        type: "date",
        required: true
    }
}, {
    propertyName: "endDate",
    element: "input",
    elementAttributes: {
        type: "date",
        required: false
    }
}, {
    propertyName: "gitRepoLink",
    element: "input",
    elementAttributes: {
        type: "text",
        required: false
    }
}];
