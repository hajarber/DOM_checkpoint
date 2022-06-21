//update price cart
function updateCartprice() {
    var quantity = 0;
    var prices = 0;
    let total = 0
    var quantityItem = document.getElementsByClassName("product_quantity");
    var priceItem = document.getElementsByClassName("cart_price");

    for (var i = 0; i < ItemRow.length; i++) {
        quantity = JSON.parse(quantityItem[i].value);
        prices = JSON.parse(priceItem[i].innerText.split(' ')[0])
        total += prices * quantity;
    }
    document.getElementsByClassName("total_price")[0].innerHTML = total + ' dh'

}
// add to cart
const addToCart = document.getElementsByClassName("add_to_cart");
let ItemRow = document.getElementsByClassName("itemRow");
for (let i = 0; i < addToCart.length; i++) {
    let button = addToCart[i];
    button.addEventListener("click", addToCartClick);
}

function addToCartClick(event) {
    var addbtn = event.target;
    var cartItem = addbtn.parentElement;
    var price = cartItem.getElementsByClassName("item_price")[0].innerText;
    var imageSrc = cartItem.getElementsByClassName("item_img")[0].src;
    addItemToCart(price, imageSrc);
    updateCartprice();
}

function addItemToCart(price, imageSrc) {
    var productRow = document.createElement("div");
    productRow.classList.add("itemRow");
    var productRows = document.getElementsByClassName("itemRows")[0];
    var cart_img = productRows.getElementsByClassName("cart_image");
    for (let i = 0; i < cart_img.length; i++) {
        if (cart_img[i].src == imageSrc) {
            alert("this item is already added to the cart");
            return;
        }
    }
    let cartRowItems = ` <div classe="item">
    <img class="cart_image" src="${imageSrc}" alt="">
    <span class="cart_price">${price}</span>
    <input class="product_quantity" type="number" min="1" max="10" value="1">
    <button class="remove_btn">Remove</button>
    </div>
    `;

    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);

    productRow
        .getElementsByClassName("remove_btn")[0]
        .addEventListener("click", remove);
    productRow
        .getElementsByClassName("product_quantity")[0]
        .addEventListener("change", quantityChanged);
    console.log(productRows);
    updateCartprice();
}
// end  of add

//add quantity
var quantityInput = document.getElementsByClassName("product_quantity");
for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value < 0) {
        input.value = 1;
    }

    updateCartprice();
}
//Remove items from cart
var removeCartItem = document.getElementsByClassName("remove_btn");
for (var i = 0; i < removeCartItem.length; i++) {
    var button = removeCartItem[i];
    button.addEventListener("click", remove);
}

function remove(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartprice();
}



function strToNumber(input) {
    JSON.parse(input.split(' ')[0])
}

// purchase items
const purchaseBtn = document.querySelector('.purchase_btn');


purchaseBtn.addEventListener('click', purchaseButtonClicked)

function purchaseButtonClicked() {
    alert('Thank you for your purchase');
}