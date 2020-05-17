export const projectsOverviewFormElementDefinitions = [{
    name: "_id",
    label: "Id",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "projectName",
    label: "Projectname",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "categories",
    label: "Categories",
    element: "select",
    elementAttributes: {
        options: [{
            value: "desktop",
            label: "Desktop-App",
        }, {
            value: "web",
            label: "Web-App",
        }, {
            value: "iOS",
            label: "iOS-App",
        }, {
            value: "android",
            label: "Android-App",
        }, {
            value: "conceptsAndPrototypes",
            label: "Concepts & Prototypes",
        }, {
            value: "other",
            label: "Other",
        }],
        required: true,
        mode: "multi"
    }
}, {
    name: "languages",
    label: "Languages",
    element: "select",
    elementAttributes: {
        options: [{
            value: "java",
            label: "Java",
        }, {
            value: "javaScript",
            label: "JavaScript",
        }, {
            value: "html",
            label: "HTML5",
        }, {
            value: "css",
            label: "CSS3",
        }, {
            value: "php",
            label: "PHP",
        }, {
            value: "swift",
            label: "Swift",
        }, {
            value: "kotlin",
            label: "Kotlin",
        }, {
            value: "c",
            label: "C",
        }, {
            value: "other",
            label: "Other",
        }],
        required: true,
        mode: "multi"
    }
}, {
    name: "technologies",
    label: "Technologies",
    element: "select",
    elementAttributes: {
        options: [{
            value: "mySQL",
            label: "MySQL",
        }, {
            value: "sqLite",
            label: "SQLite",
        }, {
            value: "oracleSQL",
            label: "Oracle SQL",
        }, {
            value: "coreData",
            label: "Core Data",
        }, {
            value: "node",
            label: "node",
        }, {
            value: "mongoDB",
            label: "mongo DB",
        }, {
            value: "react",
            label: "React",
        }, {
            value: "angular",
            label: "Angular",
        }, {
            value: "express",
            label: "Express.js",
        }, {
            value: "scss",
            label: "Sass",
        }, {
            value: "xml",
            label: "XML",
        }, {
            value: "json",
            label: "JSON",
        }, {
            value: "git",
            label: "GIT",
        }, {
            value: "other",
            label: "Other",
        }],
        required: true,
        mode: "multi"
    }
}, {
    name: "teamMembers",
    label: "TeamMembers",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "startDate",
    label: "Startdate",
    element: "input",
    elementAttributes: {
        type: "date",
        required: true
    }
}, {
    name: "endDate",
    label: "Enddate",
    element: "input",
    elementAttributes: {
        type: "date",
        required: false
    }
}, {
    name: "gitRepoLink",
    label: "Git\u00a0Repo",
    element: "input",
    elementAttributes: {
        type: "text",
        required: false
    }
}];

export const slidesOverviewFormElementsDefinitions = [{
    name: "_id",
    label: "Id",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "title",
    label: "Title",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "subtitle",
    label: "Subtitle",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "projectName",
    label: "Projectname",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "file",
    label: "File",
    element: "input",
    elementAttributes: {
        type: "file",
        required: false
    }
}, {
    name: "buttonBackgroundColor",
    label: "Button\u00a0Backgroundcolor",
    element: "input",
    elementAttributes: {
        type: "text",
        required: true
    }
}, {
    name: "buttonFontColor",
    label: "Button\u00a0Fontcolor",
    element: "select",
    elementAttributes: {
        options: [{
            value: "#e6e6e6",
            label: "Light"
        }, {
            value: "#1a1a1a",
            label: "Dark"
        }],
        required: true,
        mode: "single"
    }
}, {
    name: "colorMode",
    label: "Colormode",
    element: "select",
    elementAttributes: {
        options: [{
            value: "light",
            label: "Light"
        }, {
            value: "dark",
            label: "Dark"
        }],
        required: true,
        mode: "single"
    }
}]
