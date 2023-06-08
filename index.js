const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const agregarCarrito = document.querySelector('.add-to-cart-button');

menuEmail.addEventListener("click",toggleDesktopMenu)
menuHamIcon.addEventListener("click",toggleMobileMenu)
menuCarritoIcon.addEventListener("click",toggleCarritoAside)
productDetailCloseIcon.addEventListener("click",closeProductDetailAside)
agregarCarrito.addEventListener('click', e => getItemsAside(e));

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

// FORMULAS PARA COMPRA //

function getItemsAside(e){//realiza misma accion que agregarCompra()
    const containerAside = e.target.parentElement.parentElement;
    let id = containerAside.children[2].children[3].getAttribute('value');
    addShoppingAside(containerAside,id);
}

console.log(getItemsAside);