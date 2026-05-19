let products = JSON.parse(localStorage.getItem("products")) || [

    {
        id: 1,
        name: "Sperm Leakage (Eda)",
        price: 15000,
        image: "https://via.placeholder.com/150",
        description: "Herbal wellness support for men's health and body strength."
    },

    {
        id: 2,
        name: "Man Power",
        price: 20000,
        image: "https://via.placeholder.com/150",
        description: "Natural herbal support for energy and stamina."
    },

    {
        id: 3,
        name: "Low Sperm Count",
        price: 18000,
        image: "https://via.placeholder.com/150",
        description: "Men’s reproductive wellness support formula."
    },

    {
        id: 4,
        name: "Infection Flusher",
        price: 12000,
        image: "https://via.placeholder.com/150",
        description: "Herbal body cleansing and wellness support."
    },

    {
        id: 5,
        name: "Gonorrhea Treatment",
        price: 25000,
        image: "https://via.placeholder.com/150",
        description: "Traditional herbal wellness support product."
    },

    {
        id: 6,
        name: "Diabetes Support",
        price: 30000,
        image: "https://via.placeholder.com/150",
        description: "Natural blood sugar wellness support."
    },

    {
        id: 7,
        name: "Infertility Support",
        price: 35000,
        image: "https://via.placeholder.com/150",
        description: "Herbal reproductive wellness support."
    }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveProducts(){
    localStorage.setItem("products", JSON.stringify(products));
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}
