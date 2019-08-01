// function deleteItem(e) {}

// function getPriceByProduct(itemNode) {}

// function updatePriceByProduct(productPrice, index) {}

// function getTotalPrice() {}

// function createQuantityInput() {}

// function createDeleteButton() {}

// function createQuantityNode() {}

// function createItemNode(dataType, itemData) {}

// function createNewItemRow(itemName, itemUnitPrice) {}

// function createNewItem() {}

// window.onload = function() {
//   var calculatePriceButton = document.getElementById("calc-prices-button");
//   var createItemButton = document.getElementById("new-item-create");
//   var deleteButtons = document.getElementsByClassName("btn-delete");

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for (var i = 0; i < deleteButtons.length; i++) {
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

let productList = [];
let shoppingCart = [];

function createProduct(button) {
  let product = button.parentNode;

  let productName = product.querySelector(".product-name").value;
  let productPrice = product.querySelector(".product-price").value;
  productList.push({ productName, productPrice });
  document.getElementById("product").innerHTML = "";
  productList.forEach(shop);
}

function shop(item) {
  document.getElementById("product").innerHTML += `
  <div class="shop-item">
  <div>
      <p id="product-name"> name: 
        <span class="product-name">
          ${item.productName}
        </span>
      </p>
      <p id="product-price"> price: € 
        <span class="product-price">
          ${item.productPrice}
        </span>
      </p>
  </div>

  <button onclick="addProduct(this)" type="button">
            Add
  </button>
  <button class="cart-button" onclick="remove(this,false)" type="button">
        X
  </button>
</div>`;
}

function addProduct(button) {
  let product = button.parentNode;

  let productName = product.querySelector(".product-name").innerText;
  let productPrice = product.querySelector(".product-price").innerText;

  shoppingCart.push({ productName, productPrice });
  document.getElementById("cart-product").innerHTML = "";
  document.getElementById("total").innerHTML = "";
  shoppingCart.forEach(List);
  Total(shoppingCart);
}

function remove(button, isCart) {
  product = button.parentNode;
  const currentName = product.querySelectorAll(".product-name")[0].innerText;
  if (!isCart) {
    productList = productList.filter(product => {
      if (product.productName !== currentName) return product;
    });
  }
  product.remove();

  shoppingCart = shoppingCart.filter(product => {
    if (product.productName !== currentName) return product;
  });
  document.getElementById("cart-product").innerHTML = "";
  shoppingCart.forEach(List);

  Total(shoppingCart);
  if (shoppingCart.length === 0) {
    document.getElementById("total").innerHTML = `Total: € ${0}`;
  }
}

function List(item) {
  document.getElementById("cart-product").innerHTML += `<div class="cart-item">
      <div>
      <p> name: <span class="product-name">${
        item.productName
      }</span></p> <ul><li>price: € ${item.productPrice}</li></ul>
      </div>
      <button class="cart-button" onclick="remove(this, true)" type="button">
        X
      </button>
      <br />
    </div>`;
}

function Total(cartArray) {
  let sum = 0;
  for (let i = 0; i < cartArray.length; i++) {
    sum += Number(cartArray[i].productPrice);
    document.getElementById("total").innerHTML = `Total: € ${sum}`;
  }
  console.log(sum);
}
