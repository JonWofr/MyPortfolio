export const getHttpToast = (status, statusText) => {
    const toast = {
        heading: status,
        description: statusText,
        timestamp: Date.now()
    }
    switch(status) {
        case 200:
        case 201:
            toast.type = "success";
            break;
        case 400:
        case 401:
        case 403:
            toast.type = "warn";
            break;
        case 500:
            toast.type = "error";
            break;
        default: 
            toast.type = "info";
    }
    return toast;
}