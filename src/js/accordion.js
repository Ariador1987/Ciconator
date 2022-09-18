const accordions = document.querySelectorAll(".accordion");
const accordionContents = document.querySelectorAll(".accordion-content");

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

window.addEventListener("DOMContentLoaded", () => {
    [...accordionContents].forEach((el) => el.classList.add("hidden"));
});
