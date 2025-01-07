console.log(2>1); // true
console.log(2>=1); // true
console.log(2<1); // false
console.log(2<=1); // false
console.log(2==1); // false
console.log(2!=1); // true

console.log('2' == 2); // true
console.log('2' === 2); // false
console.log('2' != 2); // false
console.log('2' !== 2); // true
console.log("2">1); // true
console.log("2">"12"); // false
console.log("02">1); // false

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == 0); // false
console.log(null === 0); // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null < 0); // false                        // avoid this type of comparison
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false
console.log(undefined <= 0); // false
console.log(undefined == null); // false
console.log(undefined==0); // false


/* important note:
the reason is that an equality check == and comparisons > < >= <= work differently.
comparisons convert null to a number, treating it as 0. That’s why (3) null>=0 is true and (1) null>0 is false.
*/

// === checks the equality without type conversion it checks the type and value
// == checks the equality with type conversion 

console.log("2"===2); // false
console.log("2"==2); // true
