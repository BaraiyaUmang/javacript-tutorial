const marvel=['Ironman','Spiderman','Thor','Hulk','Captain America'];
const dc=['Batman','Superman','flash','Wonderwoman','Aquaman'];
// marvel.push(dc);
// console.log(marvel);  // not the best practice


// both=marvel.concat(dc);
// console.log(both);  // best practice

const allHeroes=[...marvel,...dc];
console.log(allHeroes);  // also  best practice        // it is called spread operator

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realanotherArray=anotherArray.flat(Infinity);
console.log(realanotherArray);  // it is called flat method


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:'hitesh'}))  // it is called Array.from method      // ####interesting


let scores1=100
let scores2=200
let scores3=300

console.log(Array.of(scores1,scores2,scores3))  // it is called Array.of method;

let name1="umang"
let name2="hitesh"
let name3="vishal"

console.log(Array.of(name1,name2,name3))  // it is called Array.of method;

