import { parseObjectToQueryString } from './parser';

const defaultReject = (err) => console.warn("An error occurred", err);

export const get = (url, queryObject, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const request = new XMLHttpRequest();
        request.responseType = "json";

        addListeners(request, resolve, reject);

        request.open("GET", url + parseObjectToQueryString(queryObject), true);

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

        request.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(request, requestHeaderOptions);

        request.send(JSON.stringify(body));
    })
}

const addListeners = (request, resolve, reject) => {
    request.addEventListener("load", ({ target }) => {
        const { status, statusText } = target;
        console.info(status, statusText);
        resolve(target);
    });
    request.addEventListener("error", ({ target }) => {
        const { status, statusText } = target;
        console.warn(status, statusText);
        reject(target);
    })
}

const setRequestHeaders = (request, requestHeaderOptions) => {
    for (const key in requestHeaderOptions) {
        request.setRequestHeaders(key, requestHeaderOptions[key]);
    }
}