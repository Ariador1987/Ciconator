import { reviews } from "./reviews";

const togglerBtn = document.querySelector(".main-nav--toggler");
const linksContainer = document.querySelector(".main-nav__links-container");
const hamburgerLines = document.querySelectorAll(".main-nav--toggler-line");
const accordions = document.querySelectorAll(".accordion");
const accordionContents = document.querySelectorAll(".accordion-content");

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

accordions.forEach((acc) =>
    acc.addEventListener("click", (e) => {
        handleAccordions(acc, e);
    })
);

function handleAccordions(accordion, event) {
    if (!event.target.classList.contains("accordion-heading--icon")) return;

    event.target.textContent.trim() === "+"
        ? (event.target.textContent = "-")
        : (event.target.textContent = "+");

    if (
        accordion.firstElementChild.nextElementSibling.classList.contains(
            "hidden"
        )
    ) {
        accordion.firstElementChild.nextElementSibling.classList.remove(
            "hidden"
        );
        accordion.firstElementChild.nextElementSibling.classList.add("show");
    } else {
        accordion.firstElementChild.nextElementSibling.classList.remove("show");
        accordion.firstElementChild.nextElementSibling.classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    [...accordionContents].forEach((el) => el.classList.add("hidden"));
});
