const imgs = document.querySelectorAll(".lazy-img");
const lazierImgs = document.querySelectorAll(".lazier-img");

const loadImg = (entries, obs) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-img");
        entry.target.classList.remove("lazier-img");
    });
    obs.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.1,
    rootMargin: "500px",
});

const lazierObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.1,
    rootMargin: "500px",
});

imgs.forEach((img) => imgObserver.observe(img));
lazierImgs.forEach((img) => lazierObserver.observe(img));
