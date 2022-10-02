// import { slike } from "../js/kategorije/data.js";

// class Gallery {
//     #element = null;
//     #list = [];
//     #modal = null;
//     #modalImg = null;
//     #modalImages = [];
//     #closeBtn = null;
//     #nextBtn = null;
//     #prevBtn = null;
//     #imageName = null;

//     constructor(element) {
//         this.#element = element;
//         // console.log(this.#element);
//         this.initProps();
//         this.openModal();
//         this.closeModal();
//     }

//     setImages(element) {
//         // convert nodeList to Arr
//         this.#list = [...element.querySelectorAll(".gallery-img")];
//     }

//     setModal(element) {
//         this.#modal = element.parentElement.querySelector(
//             ".section-gallery__modal"
//         );
//     }

//     setModalImg(element) {
//         this.#modalImg = element.parentElement.querySelector(".main-img");
//     }

//     setModalImages(element) {
//         this.#modalImages = [
//             ...element.parentElement.querySelectorAll(".modal-img"),
//         ];
//     }

//     setImageName(element) {
//         this.#imageName = element.parentElement.querySelector(".image-name");
//     }

//     setCloseBtn() {
//         if (this.#modal) {
//             this.#closeBtn = this.#modal.querySelector(".close-btn");
//         }
//     }

//     setNextBtn() {
//         this.#nextBtn = this.#modal.querySelector(".next-btn");
//     }

//     setPrevBtn() {
//         this.#prevBtn = this.#modal.querySelector(".prev-btn");
//     }

//     initProps() {
//         this.setImages(this.#element);
//         this.setModal(this.#element);
//         this.setModalImg(this.#element);
//         this.setModalImages(this.#element);
//         this.setImageName(this.#element);
//         this.setCloseBtn();
//         this.setNextBtn();
//         this.setPrevBtn();
//     }

//     openModal() {
//         this.#element.addEventListener("click", (e) => {
//             this.#modal.classList.add("open");
//             this.setOpenModalImages(e.target);
//         });
//     }

//     closeModal() {
//         this.#modal.addEventListener("click", (e) => {
//             if (
//                 e.target.classList.value === "section-gallery__modal open" ||
//                 e.target.classList.contains("fa-times")
//             ) {
//                 this.#modal.classList.remove("open");
//             }
//         });
//     }

//     setOpenModalImages(mainImage) {
//         // mainImage is e.target from click
//         const category = this.getAppropriateCategory(mainImage);
//         this.renderModalHTML(mainImage, category);
//     }

//     getAppropriateCategory(mainImage) {
//         if (!mainImage.dataset.name) {
//             console.error(
//                 "something went wrong with getting category for image"
//             );
//             return;
//         }
//         const categoryName = mainImage.dataset.name;
//         const appropariateCategory = slike.find((x) => x.ime === categoryName);
//         return appropariateCategory;
//     }

//     renderModalHTML(mainImage, category) {
//         let mainItem = mainImage;
//         let id = +mainItem.dataset.id;
//         const selected = category.images.find((x) => x.id === id);
//         this.#modal.innerHTML = `
//         <button class="close-btn">
//             <i class="fas fa-times"></i>
//         </button>
//         <div class="section-gallery__modal--content">
//             <button class="prev-btn">
//                 <i class="fas fa-chevron-left"></i>
//             </button>
//             <button class="next-btn">
//                 <i class="fas fa-chevron-right"></i>
//             </button>
//             <img src="${selected.src}" alt="cat" data-name=${
//             category.ime
//         } data-id="${selected.id}" class="main-img">
//             <p class="image-name">${selected.description}</p>
//             <div class="modal-images g-1">
//                 ${category.images
//                     .map(
//                         (el) =>
//                             `<img src="${el.src}" alt="cat" data-id=${
//                                 el.id
//                             } data-name=${category.ime} class="modal-img ${
//                                 el.id === selected.id ? "selected" : ""
//                             }">`
//                     )
//                     .join("")}
//             </div>
//         </div>
//         `;
//     }
// }

// {
//     /* <img src="./img/galleryphotos/cat-1.jpg" alt="cat" class="modal-img selected">
//                 <img src="./img/galleryphotos/cat-2.jpg" alt="cat" class="modal-img">
//                 <img src="./img/galleryphotos/cat-3.jpg" alt="cat" class="modal-img"></img> */
// }

// function setElement(selection) {
//     const element = document.querySelector(selection);
//     if (element) {
//         return element;
//     }
//     throw new Error(
//         `Please check "${selection}" selector, no such element exists`
//     );
// }

// const kapije = new Gallery(setElement(".kapije"));
// const ograde = new Gallery(setElement(".ograde"));
