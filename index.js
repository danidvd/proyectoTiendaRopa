const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

menuEmail.addEventListener("click",toggleDesktopMenu)
menuHamIcon.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

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

    shoppingCartContainer.classList.toggle("inactive")
};

