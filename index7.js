let student = {
    name: "Mosharof",
    age: 25,
    city: "Dhaka"
};

// Dot diye access
console.log(student.name);  // "Mosharof"
console.log(student.age);   // 25
console.log(student.city);  // "Dhaka"


// Initial object
let product = {
    name: "Laptop",
    price: 45000
};

// 1. Get using dot
console.log(product.name);  // "Laptop"

// 2. Get using bracket
console.log(product["price"]);  // 45000

// 3. Set using dot
product.brand = "Dell";

// 4. Set using bracket (dynamic)
let key = "color";
product[key] = "Silver";

// 5. Destructure
let { name, price } = product;
console.log(name, price);  // "Laptop" 45000

// 6. Add multiple using spread
product = {
    ...product,
    ram: "16GB",
    storage: "512GB SSD",
    inStock: true
};

console.log(product);
// {
//     name: "Laptop",
//     price: 45000,
//     brand: "Dell",
//     color: "Silver",
//     ram: "16GB",
//     storage: "512GB SSD",
//     inStock: true
// }