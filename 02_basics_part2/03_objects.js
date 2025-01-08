//object can be defined in 2 ways
//using constructor function
//or using object literal  

// ----->> if we create object with constructor that object will be singleton object

//singleton object
//object.create() // creates a new object


//object literals


const mysym=Symbol("key1")


const jsUser={
    name:"john",
    "full name": "john doe",
    [mysym]: "key1",                    //if you want to  access the value of symbol use [] and pass the symbol
    age: 30,
    location: "jaipur",
    email:"umang@google.com",
    isloggedIn: false,
    lastlogindays: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full name"]);
// console.log(jsUser.full name); // will give error  // .method is good but in cases like this it will give error so avoid . use[]

// console.log(jsUser[mysym]);  // here even though we havesymbol its data type showing string


jsUser.email="umang@chatgpt.com"
// Object.freeze(jsUser) // it will make object immutable
jsUser.email="faltuka@lafda.com" // it will not change the value since object is freezed
// console.log(jsUser.email);
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello there");
}

jsUser.greeting2=function(){
    console.log(`hello javascript user ${this.name}`);
}
console.log(jsUser.greeting2());


