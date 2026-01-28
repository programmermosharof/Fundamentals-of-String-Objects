// let str = "Hello";

// let reversed = str.split('').reverse().join('');
// console.log(reversed);

// const str = "Hello";
// const reversed = str.split('').reverse().join('');

// console.log(reversed); 

// const str = "Mosharof";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
// }

// console.log(reversed); // 

// const str = "JS";
// let reversed = "";

// for (const char of str) {
//     reversed = char + reversed  ; 
// }

// console.log(reversed); 

const phone = "01712345678";
let revPhone = "";

for(let i = phone.length -1; i>= 0; i--){
    revPhone= revPhone + phone[i];
}
console.log(revPhone);

// const phone = "01712345678";
// let revPhone = "";


// for (let i = phone.length - 1; i >= 0; i--) {
//     revPhone = revPhone + phone[i];
// }

// console.log(revPhone); 

const msg = "Hello Mosharof";
let more ="";
for(const sms of msg ){
    more = sms + more;
}
console.log(more);