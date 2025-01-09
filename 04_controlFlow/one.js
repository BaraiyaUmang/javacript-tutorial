// if 
// if(2=="2"){
//     console.log("executed");
    
// }else{
// console.log("not executed");
// }

// < ,> , <=,>=,==,!=,===,!==   comarison operators which returns boolean value

// const score=200;

// if(score>100){
//     const power="fly"
//     console.log(`user has power to ${power}`)
// }

// console.log(`user has power to ${power}`)  //it will throw error since power is in block scope 


// const balance=1000;

// if(balance>500) console.log("test"),console.log("test2")   //bad practise dont write code like this

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");              //nested if else
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


const loggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true


if(loggedin&&debitcard){
    // console.log("you can shop")
}

if(loggedinfromgoogle||loggedinfromemail){
    // console.log("you logged in")
}


//switch case 

//syntax

/*swirch(key) {
       case value:

       break;
    default;
        break:
    } */

// const month =3

// switch (month) {
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("february")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")        //note that break breaks the control flow
//         break;                      //if we dont use break then whole code will get executed

//     default:
//         console.log("default case matched")
//         break;
// }





//truthy and falsy  

const useremail={}

if(useremail){                            /* here we didnot comapre useremail we wrote 
    console.log("got user email")           useremail as it is but it supposed that value 
} else {                                     is true so it can be called as trthy value*/
    // console.log("no user email")
}


// falsy values

// false,0,-0,bigint 0n,"",null,undefined,nan

// everything besides these values are truthy values


//truthy values
// "0","false"," ",[],{},function(){} 


// if(useremail.length===0){
//     console.log("array is empty")

// }


const emptyobj={}

if(Object.keys(emptyobj).length ===0){
    console.log("object is empty")

}



//nullish coalescing operator (??): null undefined

let val;
// val=5 ?? 10    --->5
// val=nulll ?? 10  ---> 10
// val= undefined ?? 15  ---> 15
// val= undefined ?? 15 ?? ---> 15

// console.log(val);




// ternary operator     ---> compound way of writing if else

// condition ? true:false

const prize=100
prize<=80?console.log("less than 80"):console.log("greater than 80")