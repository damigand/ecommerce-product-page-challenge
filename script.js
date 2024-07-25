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
    if (cartContent.style.display == "none") {
        cartContent.style.display = "flex";
    } else {
        cartContent.style.display = "none";
    }
});

document.addEventListener("click", (event) => {
    if (event.target == cart || event.target == cart.childNodes[1]) return;
    if (event.target != cartContent) {
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
