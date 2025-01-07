 // array

const myArray = [0, 1, 2, 3, 4, 5];
 const myHeroes = ["Superman", "Batman", "ironman", "Spiderman"];

 const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArray[5]);


 // Array Methods

//  myArray.push(6);
//  myArray.push(7);
//  myArray.pop();
//  myArray.unshift(9);        // add element at the beginning
//  myArray.shift();           // remove element from the beginning

//  console.log(myArray.includes(9));
//  console.log(myArray.indexOf(3));

 const newArray=myArray.join()      // convert array to string

//  console.log(myArray);
//  console.log(newArray);
//  console.log(typeof newArray);


// slice and splice methods

console.log("a",myArray);
const myn1=myArray.slice(1,3);        // slice method
console.log(myn1);
console.log("b",myArray);                 // ******1  difference between slice and splice is that splice include range of elements and slice exclude range of elements
                                                   


const myn2=myArray.splice(1,3);        // splice method
console.log(myn2);

console.log("c",myArray);                //******2   differemce between slice and splice is that splice change the original array and slice does not change the original array 


// there for we can say that splice can change the original array and slice can not change the original array




