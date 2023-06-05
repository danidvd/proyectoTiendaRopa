const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click",toggleDesktopMenu)
menuHamIcon.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)
productDetailCloseIcon.addEventListener("click",closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
};

function toggleCarritoAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive")
};

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

