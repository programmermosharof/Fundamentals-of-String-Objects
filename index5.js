// let person = {
//     name: "Mosharof",
//     age: 25,
//     skill: "Frontend Developer"
// };

// console.log();


let product = {
    name: "Mouse",
    price: 500
};

// Value update
product.price = 600;
console.log(product.price); // 600

// New property add
product.color = "Black";
console.log(product.color); // "Black"

// Property delete
delete product.color;
console.log( typeof product.color); // undefined