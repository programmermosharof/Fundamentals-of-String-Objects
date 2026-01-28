let user1 = "mosharof";
let user2 = "Mosharof";

console.log(user1 === user2); // false (case sensitive!)

// Lowercase/Uppercase kore compare koro
console.log(user1.toLowerCase() === user2.toLowerCase()); // true


let name = "MoShArOf";

console.log(name.toLowerCase()); // "mosharof"
console.log(name.toUpperCase()); // "MOSHAROF"
console.log(name); // "MoShArOf" (original unchanged!)