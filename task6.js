// const dev = {
//     name: "Mosharof",
//     skill: "JavaScript",
//     salary: 20000
// };


// // --- Set (Data update kora) ---
// dev.name= "Munsef";
// dev.salary = 30022; 
// console.log(dev.salary); 
// console.log(dev);


// const user = {
//     name: "Mosharof",
//     age: 22,
//     "home address": "Dhaka" // Key-te space ache
// };


// console.log(user["home address"]); 

// const heropanti = "name";

// console.log(user[heropanti]); 

const user = {
  name: "Rahim",
  age: 22,
  city: "Dhaka"
};

for (let key in user) {
  console.log(key, user[key]);
}
