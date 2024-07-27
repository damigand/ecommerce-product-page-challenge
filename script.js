const smallImages = document.querySelectorAll(".img-wrapper");
const mainImage = document.querySelector("#main-image");

var previousSmallImage = document.querySelector(".img-wrapper.selected");

var counter = 1;

for (const image of smallImages) {
    const newClass = `active-${counter}`;
    image.addEventListener("click", (event) => {
        mainImage.classList.remove("active-1");
        mainImage.classList.remove("active-2");
        mainImage.classList.remove("active-3");
        mainImage.classList.remove("active-4");
        mainImage.classList.add(newClass);

        previousSmallImage.classList.remove("selected");
        image.classList.add("selected");

        previousSmallImage = image;
    });

    counter++;
}

const lightboxImages = document.querySelectorAll(".img-wrapper-lightbox");
const lightboxMainImage = document.querySelector("#main-image-lightbox");

var prevousLightboxImage = document.querySelector(".img-wrapper-lightbox.selected");

counter = 1;

for (const image of lightboxImages) {
    const newClass = `active-${counter}`;
    image.addEventListener("click", (event) => {
        lightboxMainImage.classList.remove("active-1");
        lightboxMainImage.classList.remove("active-2");
        lightboxMainImage.classList.remove("active-3");
        lightboxMainImage.classList.remove("active-4");
        lightboxMainImage.classList.add(newClass);

        prevousLightboxImage.classList.remove("selected");
        image.classList.add("selected");

        prevousLightboxImage = image;
    });

    counter++;
}

var selectedHeaderItem = document.querySelector(".header-list .selected");
const headerItems = document.querySelectorAll(".header-list li");

for (const item of headerItems) {
    item.addEventListener("click", (event) => {
        selectedHeaderItem.classList.remove("selected");

        item.classList.add("selected");

        selectedHeaderItem = item;
    });
}

const cart = document.querySelector(".cart");
const cartContent = document.querySelector(".cart-content");

cart.addEventListener("click", (event) => {
    if (cartContent.style.display != "flex") {
        cartContent.style.display = "flex";
    } else {
        cartContent.style.display = "none";
    }
});

var quantity = 0;
const quantityElement = document.querySelector(".quantity-number");
const substract = document.querySelector(".substract");
const add = document.querySelector(".add");

add.addEventListener("click", (event) => {
    quantity++;
    quantityElement.innerText = quantity;
});

substract.addEventListener("click", (event) => {
    if (quantity >= 1) {
        quantity--;
        quantityElement.innerText = quantity;
    }
});

var currentImage = 1;

const phonePrevious = document.querySelector(".previous");
const phoneNext = document.querySelector(".next");

phonePrevious.addEventListener("click", (event) => {
    if (currentImage > 1) {
        currentImage--;
        const activeClass = `active-${currentImage}`;

        mainImage.classList.remove("active-1");
        mainImage.classList.remove("active-2");
        mainImage.classList.remove("active-3");
        mainImage.classList.remove("active-4");
        mainImage.classList.add(activeClass);
    }
});

phoneNext.addEventListener("click", (event) => {
    if (currentImage < 4) {
        currentImage++;
        const activeClass = `active-${currentImage}`;

        mainImage.classList.remove("active-1");
        mainImage.classList.remove("active-2");
        mainImage.classList.remove("active-3");
        mainImage.classList.remove("active-4");
        mainImage.classList.add(activeClass);
    }
});

const menuButton = document.querySelector(".menu");
const menuSection = document.querySelector(".menu-section");
menuButton.addEventListener("click", (event) => {
    menuSection.classList.add("active");
});

const menuClose = document.querySelector(".close");
menuClose.addEventListener("click", (event) => {
    menuSection.classList.remove("active");
});

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");

mainImage.addEventListener("click", (event) => {
    const width = window.innerWidth;
    if (innerWidth > 600) {
        lightbox.style.display = "flex";
    }
});

closeLightbox.addEventListener("click", (event) => {
    lightbox.style.display = "none";
});
