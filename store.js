let products = JSON.parse(localStorage.getItem("products")) || [
    {
        id: 1,
        name: "Herbal Detox Blend",
        price: 4000,
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Vitality Herbal Mix",
        price: 5000,
        image: "https://via.placeholder.com/150"
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveProducts(){
    localStorage.setItem("products", JSON.stringify(products));
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
