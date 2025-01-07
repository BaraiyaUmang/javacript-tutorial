const name = "umang";
const repocount = 100;

// console.log(name + " has " + repocount + " repositories on GitHub.");  // traditional way

// Output: umang has 100 repositories on GitHub.


// Using Template Literals 

console.log(`hello my name is ${name} and i have ${repocount} repositories on GitHub.`); // advanced way



// we can define string in another way also

const str = new String("Hello World");
console.log(str[0]); // H
console.log(str.__proto__); // String
console.log(str.length); // 11
console.log(str.toLocaleLowerCase()); // hello world
console.log(str.toLocaleUpperCase()); // HELLO WORLD
console.log(str.charAt(0)); // H
console.log(str.indexOf("o")); // 4


const newString=str.substring(0,5);
// console.log(newString); // Hello

const anotherString=str.slice(-8,4);             //here both method are same but slice can take negative value also
console.log(anotherString);

const string45="     umang     "
console.log(string45);
console.log(string45.trim()); // it will remove the extra spaces from both sides


const url = "https://www.google%20facebook.com";
console.log(url.replace("%20","-"));

url.includes("https"); // true
url.startsWith("https"); // true
url.endsWith("com"); // true

const convert = "umang-prabhubhai-patel";
console.log(convert.split("-")); // ["umang","prabhubhai","patel"]



// these are the inbuilt methods of prototype obejct of string
// so we can say prototype object is a parent object of string object 

// although we used these methods we cant change the original string





