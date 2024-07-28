const smallImages = document.querySelectorAll(".img-wrapper");
const mainImage = document.querySelector("#main-image");

var previousSmallImage = document.querySelector(".img-wrapper.selected");
var quantity = 0;

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
    if (cartContent.style.display != "flex") {
        cartContent.style.display = "flex";
    } else {
        cartContent.style.display = "none";
    }
});

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

phonePrevious.addEventListener(
    "click",
    () => (currentImage = previousImage(mainImage, currentImage))
);
phoneNext.addEventListener("click", () => (currentImage = nextImage(mainImage, currentImage)));

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
    lightbox.classList.toggle("active");
});

closeLightbox.addEventListener("click", (event) => {
    lightbox.classList.toggle("active");
});

var lightboxImageCounter = 1;

const nextLightbox = document.querySelector(".lightbox-next");
const previousLightbox = document.querySelector(".lightbox-previous");
const lightboxImage = document.querySelector("#main-image-lightbox");

nextLightbox.addEventListener(
    "click",
    () => (lightboxImageCounter = nextImage(lightboxMainImage, lightboxImageCounter))
);
previousLightbox.addEventListener(
    "click",
    () => (lightboxImageCounter = previousImage(lightboxMainImage, lightboxImageCounter))
);

const lightboxImages = document.querySelectorAll(".img-wrapper-lightbox");
const lightboxMainImage = document.querySelector("#main-image-lightbox");

var previousLightboxImage = document.querySelector(".img-wrapper-lightbox.selected");

var lightboxCounter = 1;

for (const image of lightboxImages) {
    const newClass = `active-${lightboxCounter}`;
    image.addEventListener("click", () => {
        lightboxMainImage.classList.remove("active-1");
        lightboxMainImage.classList.remove("active-2");
        lightboxMainImage.classList.remove("active-3");
        lightboxMainImage.classList.remove("active-4");
        lightboxMainImage.classList.add(newClass);

        previousLightboxImage.classList.remove("selected");
        image.classList.add("selected");

        previousLightboxImage = image;
        lightboxImageCounter = parseInt(newClass.split("-")[1]);
    });
    lightboxCounter++;
}

function previousImage(imageElement, counter) {
    if (counter > 1) {
        counter--;
        const activeClass = `active-${counter}`;

        lightboxImages[counter - 1].classList.add("selected");
        previousLightboxImage.classList.remove("selected");

        previousLightboxImage = lightboxImages[counter - 1];

        imageElement.classList.remove("active-1");
        imageElement.classList.remove("active-2");
        imageElement.classList.remove("active-3");
        imageElement.classList.remove("active-4");
        imageElement.classList.add(activeClass);
    }
    return counter;
}

function nextImage(imageElement, counter) {
    if (counter < 4) {
        counter++;
        const activeClass = `active-${counter}`;

        lightboxImages[counter - 1].classList.add("selected");
        previousLightboxImage.classList.remove("selected");

        previousLightboxImage = lightboxImages[counter - 1];

        imageElement.classList.remove("active-1");
        imageElement.classList.remove("active-2");
        imageElement.classList.remove("active-3");
        imageElement.classList.remove("active-4");
        imageElement.classList.add(activeClass);
    }
    return counter;
}

const addToCartButton = document.querySelector(".add-to-cart");
addToCartButton.addEventListener("click", () => addToCart());

function addToCart() {
    if (quantity < 1) return;

    const price = 125;
    const totalPrice = price * quantity;
    const cartItems = document.querySelector(".cart-items");

    const cartHtml = `
        <div class="item">
            <img
                src="images/image-product-1-thumbnail.jpg"
                alt="item icon"
                class="item-image"
            />
            <div class="item-info">
                <span class="item-title">Fall Limited Edition Sneakers</span>
                <span class="item-price">
                    $${price} x ${quantity}
                    <span class="total-price"> $${totalPrice}.00 </span>
                </span>
            </div>
            <img
                src="images/icon-delete.svg"
                alt="remove item icon"
                class="delete-item"
            />
        </div>
        <button class="checkout">Checkout</button>
    `;

    cartItems.innerHTML = cartHtml;

    const cartQuantity = document.querySelector(".cart-quantity");
    cartQuantity.innerHTML = quantity;
    cartQuantity.style.display = "block";

    const removeItem = document.querySelector(".delete-item");

    removeItem.addEventListener("click", () => {
        cartItems.innerHTML = `
            <p>The cart is empty</p>
        `;
        cartQuantity.style.display = "none";
        cartQuantity.innerHTML = "";
    });
}
