const togglerBtn = document.querySelector(".main-nav--toggler");
const linksContainer = document.querySelector(".main-nav__links-container");
const hamburgerLines = document.querySelectorAll(".main-nav--toggler-line");

togglerBtn.addEventListener("click", () => {
    hamburgerLines.forEach((el) => el.classList.toggle("active"));
    linksContainer.classList.toggle("active");
});

linksContainer.addEventListener("click", () => {
    if ([...hamburgerLines].some((el) => el.classList.contains("active"))) {
        hamburgerLines.forEach((el) => el.classList.remove("active"));
        linksContainer.classList.remove("active");
    }
});
