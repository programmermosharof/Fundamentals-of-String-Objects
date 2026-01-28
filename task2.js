// // let name1 = "Mosharof";
// // let name2 = "mosharof";
// // let name3 = "Mosharof";

// // console.log(name1 === name2);  // false (M aar m different)
// // console.log(name1 === name3);  // true (fully same)

// let city = "DHAKA";
// let lowerCity = city.toLocaleLowerCase();

// console.log(city);       // "DHAKA" (original unchanged)
// console.log(lowerCity);  // "dhaka" (choto hater)

// let name = "mosharof";
// let displayName = name.toUpperCase();

// console.log("Welcome, " + displayName);  // "Welcome, MOSHAROF"

// // =====================================

// let searchTerm = "  JaVaScRiPt  ";
// let articleTitle = "Learning JavaScript";

// // Clean aar lowercase kore search
// let cleanSearch = searchTerm.trim().toLowerCase();
// let cleanTitle = articleTitle.toLowerCase();

// if (cleanTitle.includes(cleanSearch)) {
//     console.log("Match found!"); // Output: Match found!
// }
let userInput = "  MoShArOf123  ";
let correctUsername = "mosharof123";

let clean = userInput.trim().toLocaleLowerCase();

if(userInput === correctUsername){
    console.log("Login Successful");
}
else{
    console.log("Login Failed");
}

let rawName = "  mosharof hossain  ";

let correctrname = rawName.trim().toLocaleUpperCase();
console.log(correctrname);
console.log(correctrname.length);  