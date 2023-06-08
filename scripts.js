let imgProduct = document.getElementById('description-product-img');

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

const productList = [];
productList.push({
    name: "Body Negro",
    price: 120000,
    image: "./productos/Body negro con estampado nike.JPG",
    description: "BODY NEGRO CON ESTAMPADO NIKE"
});
productList.push({
    name: "Buso",
    price: 150000,
    image: "./productos/Buso bicolor.JPG",
    description: "BUSO BICOLOR"
});
productList.push({
    name: "Buso",
    price: 160000,
    image: "./productos/Buso con cuello y sin cuello.JPG",
    description: "BUSO CON Y SIN CUELLO"
});
productList.push({
    name: "Camiseta",
    price: 110000,
    image: "./productos/Camiseta de hombre.JPG",
    description: "CAMISETA HOMBRE LOGO NIKE"
});
productList.push({
    name: "TV",
    price: 112000,
    image: "./productos/Chaqueta basica.JPG",
    description: "ESTE ES MI PRIMER PRODCUTO"
});
productList.push({
    name: "TV",
    price: 113000,
    image: "./productos/Jogger adidas.JPG",
    description: "ESTE ES MI PRIMER PRODCUTO"
});
productList.push({
    name: "TV",
    price: 114000,
    image: "./productos/Jogger basico.JPG",
    description: "ESTE ES MI PRIMER PRODCUTO"
});
productList.push({
    name: "TV",
    price: 115000,
    image: "./productos/Jogger bicolor.JPG",
    description: "ESTE ES MI PRIMER PRODCUTO"
});
productList.push({
    name: "TV",
    price: 116000,
    image: "./productos/Jogger jordan.JPG",
    description: "ESTE ES MI PRIMER PRODCUTO"
});
productList.push({
    name: "Laptop",
    price: 117000,
    image: "./productos/Pantalon sin resorte en bota.JPG",
    description: "ESTE ES MI PRIMER PRODCUTO"
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

        // La descripcion del prodcuto le coloque la clase inactive para que no aparezca

        const productDescription = document.createElement("p");
        productDescription.classList.add("inactive")
        productDescription.innerText = product.description;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productDescription);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src","./icons/anadir-a-la-cesta.png");
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);

        productImg.addEventListener("click",function(e){
            imgProduct.setAttribute('src', e.target.src);
            
            productDetail.children[2].children[0].textContent = productInfo.children[0].children[0].textContent;
            productDetail.children[2].children[1].textContent = productInfo.children[0].children[1].textContent;  
            productDetail.children[2].children[2].textContent = productInfo.children[0].children[2].textContent;  

        })
    };
};

renderProducts(productList);



























const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
  }