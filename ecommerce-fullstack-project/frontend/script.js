const products=[
    {
        id: 1,
        name: "HP Laptop",
        category: "Electronics",
        price: 52999,
        description: "Powerful laptop for student and professionals.",
        imageText: "Laptop"
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Mobiles",
        price: 24999,
        description: "High perofrmance smartphone with quality camera.",
        imageText: "Phone"
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        description: "Clear sound, comfort, and long battery life.",
        imageText: "Headphones"
    },
    {
        id: 4,
        name: "Smart Watch",
        category: "Fitness",
        price: 3999,
        description: "Track fitness, notifications, and daily activity.",
        imageText: "Watch"
    }
];

const productGrid = document.getElementById("productGrid");

const searchInput = document.getElementById("searchInput");

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
            <button>Add to Cart</button>
        `;

        productGrid.appendChild(productCard);
    });
}

displayProducts(products);

searchInput.addEventListener("input",function(){
    const searchValue = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(function(product){
        return product.name.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue);
    });

    displayProducts(filteredProducts);
});