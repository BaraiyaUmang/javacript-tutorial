// primitive data types

// total 7 data types


// 1. Number  1,2,3.4
// 2. String   "Hello"
// 3. Boolean  true/false
// 4. Undefined  
// 5. Null  
// 6. Symbol 
// 7. BigInt

const id=Symbol("123");                   // Symbol is a unique data type in js it will never be equal to any other symbol
const anotherId=Symbol("123");                                             // even if the value is same 

console.log(id===anotherId); //false


const bignum=12345678901234567890n; // BigInt is used to store large numbers




//js is a dynamically typed language we don't have to define the data type of the variable while declaring it



//non-primitive data types or reference data types


//array
//object
//function


const heroes =["Batman","Superman","spiderman"]; //array



const person={
            name:"Bruce Wayne",
            age:30
}; //object
//object is a collection of key value pairs


const myfunction=function(){
    console.log("Hello World");
} //functionis a block of code that can be executed multiple times



console.log(typeof heroes); //object

//typeof operator is used to find the data type of the variable
//typeof is a unary operator that is placed before its single operand, which can be of any type.

//null is an object in js but it is a primitive data type in js so it is a bug in js


console.log(typeof null); //object




