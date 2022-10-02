import { reviews } from "./reviews.js";

const testimonialContainer = document.querySelector(".testimonials");
const testimonialImg = document.querySelector(".testimonials__img");
const testimonialTitle = document.querySelector(".testimonials__title");
const testimonialJob = document.querySelector(".testimonials__job");
const testimonialInfo = document.querySelector(".testimonials__info");
const btnTestimonialLeft = document.querySelector(
    ".testimonials__button--left"
);
const btnTestimonialRight = document.querySelector(
    ".testimonials__button--right"
);

// State
let currentNumber = 0;
const intervalTiming = 2250;
let interval = setInterval(() => intervalSetup(), intervalTiming);

// Event Listeners
testimonialContainer.addEventListener("mouseover", () => {
    console.log("hi");
    clearInterval(interval);
});

testimonialContainer.addEventListener("mouseout", () => {
    interval = setInterval(() => intervalSetup(), intervalTiming);
});

btnTestimonialLeft.addEventListener("click", (e) => {
    e.preventDefault();
    currentNumber--;
    moveItem();
});

btnTestimonialRight.addEventListener("click", (e) => {
    e.preventDefault();
    currentNumber++;
    moveItem();
});

window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentNumber];
    setProperties(item);
});

// Logic - Functions
function adjustNumber(num) {
    if (num < 0) {
        currentNumber = reviews.length - 1;
        return currentNumber;
    }
    if (num > reviews.length - 1) {
        currentNumber = 0;
        return currentNumber;
    }
}

function intervalSetup() {
    currentNumber++;
    moveItem();
}

function moveItem() {
    if (isValidNumber(currentNumber)) {
        setProperties(reviews[currentNumber]);
        return;
    }
    adjustNumber(currentNumber);
    setProperties(reviews[currentNumber]);
}

function isValidNumber(num) {
    return Number.isFinite(num) && num >= 0 && num < reviews.length;
}

function setProperties(item) {
    testimonialImg.src = item.img;
    testimonialTitle.textContent = item.name;
    testimonialJob.textContent = item.job;
    testimonialInfo.textContent = item.text;
}
