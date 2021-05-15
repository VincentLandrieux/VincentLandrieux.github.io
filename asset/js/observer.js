export function observer(){
    const threshold = .1;
    const options = {
        root: null,
        rootMargin: '0px',
        threshold
    };

    const handleIntersect = function (entries, observer) {
        entries.forEach((entry) => {
            if(entry.intersectionRatio > threshold) {
                entry.target.classList.remove('reveal-hide');
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const targets = document.querySelectorAll('.reveal-hide');
    targets.forEach((target) => {
        observer.observe(target);
    });
}
