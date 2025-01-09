// const tinderUser= new Object();

const tinderUser = {}   //both will give same output but first one is singleton object second one is object literal

tinderUser.id = '123abc';
tinderUser.name = 'John Doe';
tinderUser.isloggedIn = false;

// console.log(tinderUser); 


const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            first: "John",
            last: "Doe"
        }
    }



}

// console.log(regularUser.fullname.userfullname.first);


const obj1={1:"a", 2:"b", 3:"c"};
const obj2={4:"d", 5:"e", 6:"f"};

// const obj3 = {...obj1, ...obj2};  // spread operator

const obj3 = Object.assign({}, obj1, obj2);  //Object.assign method

// console.log(obj3);

const users= [
    {
        id: 1,
        name: "John Doe",

    },
    {
        id: 2,
        name: "Jane Doe",
    },
    {
        id: 3,
        name: "Jim Doe",
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gives keys of object
console.log(Object.values(tinderUser)); // gives values of object
console.log(Object.entries(tinderUser)); // gives key value pair of object


console.log(tinderUser.hasOwnProperty('id')); // checks if object has property or not



const course={

        coursename: "JS",
        price: 1000,
        courseinstructor: "umang patel",

}

//course.instructor

const {courseinstructor:instructor}=course
console.log(instructor); // gives value of instructor


//example of api   api returns data in json format it is basically object

// {
//     "name":"umang",
//     "age": 24,
//     "location": "india"

// }


//sometimes apis send data in array of objects

[
    {},
    {},
    {},
    {}
]