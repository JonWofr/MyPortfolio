const defaultReject = (err) => console.warn("An error occurred", err);

export const get = (url, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const request = new XMLHttpRequest();
        request.responseType = "json";

        addListeners(request, resolve, reject);

        request.open("GET", url, true);

        if (requestHeaderOptions) setRequestHeaders(request, requestHeaderOptions);

        request.send(null);
    })
}

export const post = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const request = new XMLHttpRequest();
        request.responseType = "json";

        addListeners(request, resolve, reject);

        request.open("POST", url, true);

        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) request.setRequestHeader("Authorization", `Bearer ${jwt}`);

        request.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(request, requestHeaderOptions);

        request.send(JSON.stringify(body));
    })
}

export const put = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const request = new XMLHttpRequest();
        request.responseType = "json";

        addListeners(request, resolve, reject);

        request.open("PUT", url, true);

        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) request.setRequestHeader("Authorization", `Bearer ${jwt}`);

        request.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(request, requestHeaderOptions);

        request.send(JSON.stringify(body));
    })
}

export const patch = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const request = new XMLHttpRequest();
        request.responseType = "json";

        addListeners(request, resolve, reject);

        request.open("PATCH", url, true);
        
        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) request.setRequestHeader("Authorization", `Bearer ${jwt}`);

        request.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(request, requestHeaderOptions);

        request.send(JSON.stringify(body));
    })
}

// This is named remove because delete somehow is reserved, seems to be keyword for something
export const remove = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const request = new XMLHttpRequest();
        request.responseType = "json";

        addListeners(request, resolve, reject);

        request.open("DELETE", url, true);

        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) request.setRequestHeader("Authorization", `Bearer ${jwt}`);

        request.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(request, requestHeaderOptions);

        request.send(JSON.stringify(body));
    })
}

const addListeners = (request, resolve, reject) => {
    request.addEventListener("load", ({ target }) => {
        const { status, statusText } = target;
        const statusCategory = parseInt(status.toString().charAt(0));
        switch (statusCategory) {
            case 1:
            case 2:
            case 3:
                //console.info(status, statusText);
                resolve(target);
                break;
            case 4:
            case 5:
                console.warn(status, statusText);
                reject(`${status} ${statusText}`);
                break;
            default:
                console.warn(`The response status ${status} is not known`);
        }
    });
    request.addEventListener("error", ({ target }) => {
        const { status, statusText } = target;
        console.warn(status, statusText);
        reject(`${status} ${statusText}`);
    })
}

const setRequestHeaders = (request, requestHeaderOptions) => {
    for (const key in requestHeaderOptions) {
        request.setRequestHeader(key, requestHeaderOptions[key]);
    }
}