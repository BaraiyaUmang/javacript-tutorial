function myname(){
    console.log("u");
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("g");
}

// myname()


// function addtwonum(num1,num2){        //parameters
//         console.log( num1*num2);
// }

// addtwonum(45,3)            //arguments



function addtwonum(num1,num2){        //parameters
    let sum = num1 + num2;
    return sum;                    //it is last sentance of function after return no code will be excuted
    console.log("hello")            //this wont get executed
}
const sum =addtwonum(34,56);
// console.log("sum=",sum);


// function loginusermsg(username){
//     if(username===undefined){
//         console.log("plz enter valid username")
//         return
//     }            
    
//     return `${username} just logged into the system`
// }

// // let result=loginusermsg("umang")
// // console.log("result:",result);


// console.log(loginusermsg());


function loginusermsg(username="umang"){
    if(!username){                                                 // ! is same as  username===undefined
        console.log("plz enter valid username")
        return
    }
    return `${username} just logged into the system`
}

// console.log(loginusermsg("patel"));         //it will override the parameter value


function calculatercartprize(...num1){                // it is rest operator  it is same as spread operator but use cases may differ according to situation
    return num1

}

// console.log(calculatercartprize(123,456,789,2345,6789))


function calccartprize(val1,val2,...num1){

    return num1;
}

// console.log(calccartprize(12,34,56,78,90))

let data= {
    name:"umang",
    age:25
}

function handleobject(anyobject){
    return `name is ${anyobject.name} and age is ${anyobject.age}`


}

// console.log(handleobject(data));

const newarray=[1,2,3,4,5,6,7,8,9];

function handlearray(array){
    return array[1]

}
// console.log(handlearray(newarray))
console.log(handlearray([456,789,3,4,5,6,7,56]))