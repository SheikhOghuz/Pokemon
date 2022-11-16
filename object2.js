let phone = {
    productName: "Apple iPhone 11, US Version, 64GB, Black",
    price: "$539",
    rating: "4 stars",
    brand: "Apple",
    memory: "storage capacity 64GB",
    cellularTechnology: "4G",
    screenSize: "6.1 Inches"
};

document.getElementById("demo2").innerHTML =
    "Price: " + phone.price + "<br>" +
    "Star Rating: " + phone.rating + "<br>" +
    "Brand: " + phone.brand + "<br>" +
    "Memomry: " + phone.memory + "<br>" +
    "Cullular Technology: " + phone.cellularTechnology + "<br>" +
    "Screen Size: " + phone.screenSize +
    phone.productImage + "<br>";