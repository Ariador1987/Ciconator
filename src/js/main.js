import "./gallery.js";
import "./glightbox.js";
import "./accordion.js";
import "./testimonials.js";

const togglerBtn = document.querySelector(".main-nav--toggler");
const linksContainer = document.querySelector(".main-nav__links-container");
const hamburgerLines = document.querySelectorAll(".main-nav--toggler-line");
const galleryItemsContainer = document.querySelectorAll(
    ".section-gallery__content"
);

const lightbox = GLightbox({
    touchNavigation: true,
    selector: ".glightbox3",
});

togglerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hamburgerLines.forEach((el) => el.classList.toggle("active"));
    linksContainer.classList.toggle("active");
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
    console.log(span);

    const DEFAULT_IMG_COUNT = 2;
    if (span) {
        const count = imagesCounts.length - DEFAULT_IMG_COUNT;
        if (count > 0) {
            span.textContent = `+${count}`;
        }
    }
});

// document.addEventListener("DOMContentLoaded", () => {
//     [...accordionContents].forEach((el) => el.classList.add("hidden"));
// });
