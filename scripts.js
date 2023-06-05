
function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

const productList = [];
productList.push({
    name: "Deportivo Negro",
    price: 120000,
    image: "./productos/Body negro con estampado nike.JPG",
});
productList.push({
    name: "TV",
    price: 150000,
    image: "./productos/Buso bicolor.JPG",
});
productList.push({
    name: "TV",
    price: 160000,
    image: "./productos/Buso con cuello y sin cuello.JPG",
});
productList.push({
    name: "TV",
    price: 110000,
    image: "./productos/Camiseta de hombre.JPG",
});
productList.push({
    name: "TV",
    price: 112000,
    image: "./productos/Chaqueta basica.JPG",
});
productList.push({
    name: "TV",
    price: 113000,
    image: "./productos/Jogger adidas.JPG",
});
productList.push({
    name: "TV",
    price: 114000,
    image: "./productos/Jogger basico.JPG",
});
productList.push({
    name: "TV",
    price: 115000,
    image: "./productos/Jogger bicolor.JPG",
});
productList.push({
    name: "TV",
    price: 116000,
    image: "./productos/Jogger jordan.JPG",
});
productList.push({
    name: "Laptop",
    price: 117000,
    image: "./productos/Pantalon sin resorte en bota.JPG",
});

const cardsContainer= document.querySelector(".cards-container");

function renderProducts(arr){
    for (product of arr) {
        // Crear Elemento DIV //
        const productCard = document.createElement("div");
        // Agregar Class a DIV //
        productCard.classList.add("product-card");
        // Crear etiqueta img //
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);// Set atribute modiica propiedad para el caso SRC //
        productImg.addEventListener("click",openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/anadir-a-la-cesta.png");
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard)

    };
};

renderProducts(productList);

























const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
  }