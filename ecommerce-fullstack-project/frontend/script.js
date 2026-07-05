const API_BASE_URL = "http://localhost:5000";

let products = [];

const productGrid = document.getElementById("productGrid");

const searchInput = document.getElementById("searchInput");

const cartCount = document.getElementById("cartCount");

const cartItems = document.getElementById("cartItems");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount(){
    cartCount.textContent = cart.length;
}

function displayCartItems(){
    cartItems.innerHTML = "";

    if (cart.length ===0 ){
        cartItems.innerHTML = `
            <p class="empty-cart">Your cart is empty.</p>
        `;
        return;
    }
    cart.forEach(function(item, index){
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <span>₹${item.price.toLocaleString("en-IN")}</span>
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;

        cartItems.appendChild(cartItem);
    });
}

function addToCart(productId){
    const selectedProduct = products.find(function(product){
        return product.id === productId;
    });

    if(!selectedProduct){
        return;
    }

    cart.push(selectedProduct);

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();
    displayCartItems();
}

function removeFromCart(index){
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    displayCartItems();
}

function displayProducts(productList){
    productGrid.innerHTML="";

    if (productList.length === 0){
        productGrid.innerHTML = `
            <p class="no-products">No products found.</p>
        `;
        return;
    }

    productList.forEach(function(product){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div class="product-image">${product.imageText}</div>
            <small>${product.category}</small>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>₹${product.price.toLocaleString("en-IN")}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productGrid.appendChild(productCard);
    });
}

async function fetchProducts(){
    try{
        productGrid.innerHTML = `
            <p class = "no-products">Loading products...</p>
        `;

        const response = await fetch(`${API_BASE_URL}/api/products`);

        products = await response.json();

        displayProducts(products);
    }catch(error){
        productGird.innerHTML = `
            <p class = "no-products">Unable to load products. Please check if backend server is running.</p>
        `;
    }
}
fetchProducts();

updateCartCount();
displayCartItems();

searchInput.addEventListener("input",function(){
    const searchValue = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(function(product){
        return product.name.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue);
    });

    displayProducts(filteredProducts);
});