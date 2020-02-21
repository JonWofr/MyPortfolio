export const getListItemIntersectionObserver = (intersectingCallback, options) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const { target } = entry;
                console.info("Is intersecting the list", target);
                observer.unobserve(target);
                intersectingCallback();
            }
        });
    }, options)
}