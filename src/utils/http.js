const defaultReject = (err) => console.warn("An error occurred", err);

export const get = (url, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const req = new XMLHttpRequest();
        req.responseType = "json";

        addListeners(req, resolve, reject);

        req.open("GET", url, true);

        if (requestHeaderOptions) setRequestHeaders(req, requestHeaderOptions);

        req.send(null);
    })
}

export const post = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const req = new XMLHttpRequest();
        req.responseType = "json";

        addListeners(req, resolve, reject);

        req.open("POST", url, true);
        attachJwt(req);

        if (requestHeaderOptions) setRequestHeaders(req, requestHeaderOptions);

        req.send(JSON.stringify(body));
    })
}

export const postFile = (url, file, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {
        const fileReader = new FileReader();
        fileReader.addEventListener("error", err => reject(err))
        fileReader.addEventListener("load", event => {
            const body = event.target.result;
            const req = new XMLHttpRequest();
            req.responseType = "json";

            req.upload.addEventListener("progress", (event) => {
                console.info(`${Math.floor(event.loaded / event.total * 100)}%`);
            });
            addListeners(req, resolve, reject);

            req.open("POST", url, true);
            attachJwt(req);

            if (requestHeaderOptions) setRequestHeaders(req, requestHeaderOptions);

            req.setRequestHeader("Content-Type", file.type);

            req.send(body);
        })
        fileReader.readAsArrayBuffer(file);
    })
}

export const put = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const req = new XMLHttpRequest();
        req.responseType = "json";

        addListeners(req, resolve, reject);

        req.open("PUT", url, true);
        attachJwt(req);


        req.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(req, requestHeaderOptions);

        req.send(JSON.stringify(body));
    })
}

export const patch = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const req = new XMLHttpRequest();
        req.responseType = "json";

        addListeners(req, resolve, reject);

        req.open("PATCH", url, true);
        attachJwt(req);


        req.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(req, requestHeaderOptions);

        req.send(JSON.stringify(body));
    })
}

// This is named remove because delete somehow is reserved, seems to be keyword for something
export const remove = (url, body, requestHeaderOptions) => {
    return new Promise((resolve, reject = defaultReject) => {

        const req = new XMLHttpRequest();
        req.responseType = "json";

        addListeners(req, resolve, reject);

        req.open("DELETE", url, true);
        attachJwt(req);

        req.setRequestHeader("Content-Type", "application/json");
        if (requestHeaderOptions) setRequestHeaders(req, requestHeaderOptions);

        req.send(JSON.stringify(body));
    })
}

const addListeners = (req, resolve, reject) => {
    req.addEventListener("load", ({ target }) => {
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
    req.addEventListener("error", ({ target }) => {
        const { status, statusText } = target;
        console.warn(status, statusText);
        reject(`${status} ${statusText}`);
    })
}

const attachJwt = (req) => {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) req.setRequestHeader("Authorization", `Bearer ${jwt}`);
}

const setRequestHeaders = (req, requestHeaderOptions) => {
    for (const key in requestHeaderOptions) {
        req.setRequestHeader(key, requestHeaderOptions[key]);
    }
}