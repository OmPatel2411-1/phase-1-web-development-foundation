const products = [
    {
        id: 1,
        name: "HP Laptop",
        category: "Electronics",
        price: 52999,
        description: "Powerful laptop for students and professionals.",
        imageText: "Laptop"
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 24999,
        description: "High performance smartphone with quality camera.",
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

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 5000;

app.get("/", function(req, res){
    res.send("E-commerce beckend server is running");
});

app.get("/api/products", function(req, res){
    res.json(products);
});

app.get("/api/products/:id", function(req, res){
    const productId = Number(req.params.id);

    const product = products.find(function(item){
        return item.id === productId;
    });

    if (!product){
        return res.status(404).JSON({
            message: "Product not found"
        });    
    }
    res.json(product);
})
app.listen(PORT, function(){
    console.log(`Server running on http://localhost:${PORT}`);
});