export const getIntersectionObserver = (isIntersectingCallback, options) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const { target } = entry;
                observer.unobserve(target);
                isIntersectingCallback(target);
            }
        });
    }, options)
}