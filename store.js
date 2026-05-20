// ===============================
// PRODUCTS SYSTEM
// ===============================

// Load products from localStorage OR use default
let products = JSON.parse(localStorage.getItem("products")) || [

    {
        id: 1,
        name: "Sperm Leakage (Eda)",
        price: 15000,
        image: "https://via.placeholder.com/300x200",
        description: "Herbal wellness support for men's health and body strength."
    },

    {
        id: 2,
        name: "Man Power",
        price: 20000,
        image: "https://via.placeholder.com/300x200",
        description: "Natural herbal support for energy and stamina."
    },

    {
        id: 3,
        name: "Low Sperm Count",
        price: 18000,
        image: "https://via.placeholder.com/300x200",
        description: "Men’s reproductive wellness support formula."
    },

    {
        id: 4,
        name: "Infection Flusher",
        price: 12000,
        image: "https://via.placeholder.com/300x200",
        description: "Herbal body cleansing and wellness support."
    },

    {
        id: 5,
        name: "Gonorrhea Treatment",
        price: 25000,
        image: "https://via.placeholder.com/300x200",
        description: "Traditional herbal wellness support product."
    },

    {
        id: 6,
        name: "Diabetes Support",
        price: 30000,
        image: "https://via.placeholder.com/300x200",
        description: "Natural blood sugar wellness support."
    },

    {
        id: 7,
        name: "Infertility Support",
        price: 35000,
        image: "https://via.placeholder.com/300x200",
        description: "Herbal reproductive wellness support."
    }

];

// ===============================
// CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Save products (for future admin use)
function saveProducts(){
    localStorage.setItem("products", JSON.stringify(products));
}

// ===============================
// ADD PRODUCT TO CART
// ===============================

function addToCart(id){

    let item = products.find(p => p.id === id);

    if(!item){
        alert("Product not found ❌");
        return;
    }

    let existing = cart.find(c => c.id === id);

    if(existing){
        existing.qty += 1;
    } else {
        cart.push({
            ...item,
            qty: 1
        });
    }

    saveCart();
    alert("Added to cart ✅");
}

// ===============================
// REMOVE FROM CART (optional use later)
// ===============================

function removeFromCart(id){

    cart = cart.filter(item => item.id !== id);
    saveCart();
}

// ===============================
// CLEAR CART (optional)
// ===============================

function clearCart(){
    cart = [];
    saveCart();
}
