// let score=true;

// console.log(typeof score); // number
// console.log(typeof (score)); // number


// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN


// "33" -> 33
//"33abc" -> NaN
//true -> 1
//false -> 0

// let loggedIn = true;
// let vari=Boolean(loggedIn);
// console.log(vari); // true 


//1 -> true
//0 -> false
//""=>false
//"umang"=>true

let number=24;
let stringNumber=String(number);
// console.log(stringNumber); // "24"
// console.log(typeof stringNumber); // strings


let val = 3;
let negval=-val;
// console.log(negval);

console.log(3+4); // 7
console.log("3"+"4"); // 34
console.log(3+"4"); // 34
console.log(4-3); // 1
console.log(6*8); // 48
console.log(6/8); // 0.75
console.log(6%8); // 6
console.log(6**2); // 36

let str1="Hello";
let str2="World";
let str3=str1+str2;
console.log(str3); // HelloWorld   


console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2+2); // 122
console.log(1+2+"2"); // 32

console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+""); // 0

let gameScore=100;
gameScore++;
console.log(gameScore); // 101


let x = 3;
const y = x++;

console.log(x); // 4
console.log(y); // 3

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(a); // 4
console.log(b); // 4

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
