export const parseObjectToQueryString = (object) => {
    let queryString = "";

    const keys = Object.keys(object);
    keys.forEach((key, index) => {
        key = key.toLowerCase();
        keys[index] = replaceInvalidUrlSigns(key)
    })
    const values = Object.values(object);
    values.forEach((value, index) => {
        if (typeof value === "string") {
            value = value.toLowerCase()
            values[index] = replaceInvalidUrlSigns(value);
        }
    })

    keys.forEach((key, index) => {
        if (index === 0) {
            queryString += `?${key}=${values[index]}`
        }
        else {
            queryString += `&${key}=${values[index]}`
        }
    })

    console.log("Parsed Object to querystring", object, queryString);

    return queryString;
}

const replaceInvalidUrlSigns = (queryString) => {
    const regExpArg = /\s+/;
    const regExp = new RegExp(regExpArg);

    return queryString.split(regExp).join("-");
}

export const parseDocumentsToProjects = (documents) => {
    const projects = {};
    documents.forEach(document => {
        projects[document._id] = document;
    });
    console.log("Parsed Projects into key-value objects", projects);
    return projects;
}

export const parseFileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            resolve(e.target.result);
        }
        fileReader.onerror = (e) => {
            reject(e.target.error);
        }
        fileReader.readAsDataURL(file);
    })
}

export const parseShallowPropsObjectToPropsString = (props) => {
    let propsString = "";
    for (const key in props) {
        let value;
        if (typeof props[key] === "object") value = "OBJECT";
        else if (typeof props[key] === "function") value = "FUNCTION";
        else value = props[key];

        if (value.length > 30) value = `${value.substring(0, 31)}...`;

        propsString += propsString === "" ?  `${key}: ${value}` : `, ${key}: ${value}`
    }
    return propsString;
}