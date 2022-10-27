import "./lazyload.js";
import "./glightbox.js";
import "./accordion.js";
import "./counter.js";
// import "./testimonials.js";

const togglerBtn = document.querySelector(".main-nav--toggler");
const linksContainer = document.querySelector(".main-nav__links-container");
const hamburgerLines = document.querySelectorAll(".main-nav--toggler-line");
const galleryItemsContainer = document.querySelectorAll(
    ".section-gallery__content"
);
const allNavLinks = [...document.querySelectorAll(".main-nav__links--link")];
const heroCtaBtn = document.querySelector(".hero__cta");
const izradaBtn = document.querySelector(".section-about__info--btn");
const heroSection = document.querySelector("#naslovnica");
const onamaSection = document.querySelector("#onama");
const izradaSection = document.querySelector("#izrada");
const proizvodiSection = document.querySelector("#proizvodi");
const kontaktSection = document.querySelector("#kontakt");

const allSections = [
    heroSection,
    onamaSection,
    izradaSection,
    proizvodiSection,
    kontaktSection,
];
const makeZiziHappy = (entries, obs) => {
    const [entry] = entries;
    const currentId = `#${entry.target.id}`;

    if (entry.isIntersecting) {
        allNavLinks.forEach((link) => link.classList.remove("active"));
        if (
            allNavLinks.some((link) => link.getAttribute("href") === currentId)
        ) {
            const index = allNavLinks.findIndex(
                (link) => link.getAttribute("href") === currentId
            );
            allNavLinks[index].classList.add("active");
        }
    }
};
const sectionObserver = new IntersectionObserver(makeZiziHappy, {
    root: null,
    threshold: 0.15,
});
allSections.forEach((sect) => {
    sectionObserver.observe(sect);
});

allNavLinks.some(
    (link) =>
        link.classList.contains("active") && link.classList.remove("active")
);

const lightbox = GLightbox({
    touchNavigation: true,
    selector: ".glightbox3",
});

heroCtaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#onama").scrollIntoView({ behavior: "smooth" });
});

izradaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#izrada").scrollIntoView({ behavior: "smooth" });
});

togglerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerLines.forEach((el) => el.classList.toggle("active"));
    linksContainer.classList.toggle("active");
});

linksContainer.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

linksContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if ([...hamburgerLines].some((el) => el.classList.contains("active"))) {
        hamburgerLines.forEach((el) => el.classList.remove("active"));
        linksContainer.classList.remove("active");
    }
});

galleryItemsContainer.forEach((container) => {
    const imagesCounts = [...container.querySelectorAll(".glightbox3")];
    const span = container.querySelector(".section-gallery--item-count");

    const DEFAULT_IMG_COUNT = 2;
    if (span) {
        const count = imagesCounts.length - DEFAULT_IMG_COUNT;
        if (count > 0) {
            span.textContent = `+${count}`;
        }
    }
});
