export const parseObjectToQueryString = (object) => {
    let queryString = "";

    const keys = Object.keys(object);
    const values = Object.values(object);

    values.forEach((value, index) => {
        switch (typeof value) {
            case "undefined":
                keys.splice(index, 1);
                values.splice(index, 1);
                break;
            case "object":
                values[index] = JSON.stringify(value);
                break;
            case "boolean":
            case "number":
            case "string":
            case "symbol":
                break;
            case "function":
            default:
                throw new Error(`Value ${value} with type ${typeof value} can't be sent via QueryString`);
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

export const parseQueryStringToObject = (queryString) => {
    const object = {};

    const keyValuePairStrings = queryString.slice(1).split("&");
    keyValuePairStrings.forEach(keyValuePairString => {
        const keyValuePair = keyValuePairString.split("=");
        const key = keyValuePair[0];
        let value = keyValuePair[1];
        try {
            value = JSON.parse(value);
        }
        catch { }
        finally {
            object[key] = value;
        }
    })

    return object;
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

        propsString += propsString === "" ? `${key}: ${value}` : `, ${key}: ${value}`
    }
    return propsString;
}

export const parseFormElementDefinitionsToFilters = (formElementDefinitions) => {
    const filters = [];
    formElementDefinitions.forEach(({ name, label, element, elementAttributes: { options, mode } }) => {
        if (element === "select" && mode === "multi") {
            const filter = {
                name,
                label,
                listItems: [],
                checkedCheckboxesCount: 0
            }
            options.forEach(({ value, label }) => {
                filter.listItems.push({
                    value,
                    label,
                    isChecked: false
                })
            })
            filters.push(filter);
        }
    })
    return filters;
}

export const parseFiltersAndSearchFieldValueToMongoDbQueryObject = (filters, searchFieldValue) => {
    let mongoDbQueryObject = undefined;
    const andConditions = [];
    filters.forEach(({ name, listItems }) => {
        const orConditions = []
        listItems.forEach(({ value, isChecked }) => {
            if (!isChecked) return;
            orConditions.push({
                [name]: value
            })
        })
        if (orConditions.length === 0) return;
        else if (orConditions.length === 1) andConditions.push(orConditions[0])
        else andConditions.push({
            $or: orConditions
        })
    })

    if (searchFieldValue !== "") {
        andConditions.push({
            projectName: {
                $regex: searchFieldValue,
                $options: "i"
            }
        })
    }

    if (andConditions.length === 0) return "";
    else if (andConditions.length === 1) mongoDbQueryObject = andConditions[0];
    else mongoDbQueryObject = {
        $and: andConditions
    }
    console.log(mongoDbQueryObject);
    return mongoDbQueryObject;
}

export const parseMongoDbQueryObjectToFiltersAndSearchFieldValue = (filters, mongoDbQueryObject) => {
    let searchFieldValue = "";

    const mongoDbQueryObjectKeys = Object.keys(mongoDbQueryObject);
    mongoDbQueryObjectKeys.forEach(mongoDbQueryObjectKey => {
        switch (mongoDbQueryObjectKey) {
            case "$and":
                mongoDbQueryObject[mongoDbQueryObjectKey].forEach(andObject => {
                    const andObjectKey = Object.keys(andObject)[0];
                    switch (andObjectKey) {
                        case "$or":
                            andObject[andObjectKey].forEach(orObject => {
                                const filterName = Object.keys(orObject)[0];
                                const listItemValue = orObject[filterName];
                                const affectedFilter = filters.find(filter => filter.name === filterName);
                                affectedFilter.checkedCheckboxesCount++;
                                affectedFilter.listItems.find(listItem => listItem.value === listItemValue).isChecked = true;
                            })
                            break;
                        case "projectName":
                            searchFieldValue = andObject[andObjectKey]["$regex"];
                            break;
                        default:
                            const listItemValue = andObject[andObjectKey];
                            const affectedFilter = filters.find(filter => filter.name === andObjectKey);
                            affectedFilter.checkedCheckboxesCount++;
                            affectedFilter.listItems.find(listItem => listItem.value === listItemValue).isChecked = true;
                    }
                })
                break;
            case "$or":
                mongoDbQueryObject[mongoDbQueryObjectKey].forEach(orObject => {
                    const filterName = Object.keys(orObject)[0];
                    const listItemValue = orObject[filterName];
                    const affectedFilter = filters.find(filter => filter.name === filterName);
                    affectedFilter.checkedCheckboxesCount++;
                    affectedFilter.listItems.find(listItem => listItem.value === listItemValue).isChecked = true;
                })
                break;
            case "projectName":
                searchFieldValue = mongoDbQueryObject[mongoDbQueryObjectKey]["$regex"];
                break;
            default:
                const listItemValue = mongoDbQueryObject[mongoDbQueryObjectKey];
                const affectedFilter = filters.find(filter => filter.name === mongoDbQueryObjectKey);
                affectedFilter.checkedCheckboxesCount++;
                affectedFilter.listItems.find(listItem => listItem.value === listItemValue).isChecked = true;
        }
    })

    return [filters, searchFieldValue];
}