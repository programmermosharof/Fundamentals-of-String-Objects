let product = {
    name: "Mouse",
    price: 1500,
    brand: "Logitech"
};

let keys = Object.keys(product);

// Loop through keys
keys.forEach(function(key) {
    console.log(key + ": " + product[key]);
});

// Output:
// name: Mouse
// price: 1500
// brand: Logitech


let student = {
    name: "Mosharof",
    age: 25,
    city: "Dhaka",
    skill: "CSS"
};

// Loop through keys
for(let key in student) {
    console.log(key);  // property name
}

// Output:
// name
// age
// city
// skill


