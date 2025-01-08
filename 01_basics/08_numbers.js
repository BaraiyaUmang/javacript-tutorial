const score=1000;

// console.log(score); // 1000

const bonus=new Number(200);
// console.log(bonus); // [Number: 200]

// console.log(bonus.toString().length);   //3
// console.log(bonus.toFixed(3)); // 200.000

const otherNumber=34.967894567;
// console.log(otherNumber.toPrecision(3)); // 34.9

const hundreads=100000;
// console.log(hundreads.toLocaleString("en-IN")); // 100,000






//==================== MATHS==============================================//


// lets learn about Math object and its methods

// console.log(Math);

// console.log((maths.abs(-34))); // 34

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.round(3.4)); // 3
// console.log(Math.round(3.5)); // 4
// console.log(Math.floor(3.9)); // 3
// console.log(Math.ceil(3.1)); // 4
// console.log(Math.pow(2,3)); // 8
// console.log(Math.sqrt(16)); // 4
// console.log(Math.min(1,2,3,4,5)); // 1
// console.log(Math.max(1,2,3,4,5)); // 5
// console.log(Math.random()); // 0.123456789
// console.log(Math.floor(Math.random()*10)); // 7
// console.log(Math.floor(Math.random()*10)+1); // 8

// console.log(Math.random());   // returns a random number between 0 and 1
// console.log(Math.random()*10); // returns a random number between 0 and 10
// console.log((Math.floor(Math.random()*10)+1)); // returns a random number between 1 and 11


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) +min ) ;   // returns a random number between 10 and 20 


const min1 =25
const max1 = 30;

console.log(Math.floor(Math.random()*(max1-min1+1))+min1); // returns a random number between 25 and 30















