// var c =345
let a =123345


if(true){
    let a=10
    const b=20
    var c=30
    // console.log("inner:",a)
}                                  //inside {} is block scope  and other is global scope

// console.log(a)                  
// console.log(b)               
// console.log(c)                //here even though c is in blockscope it gets executed unlike a and b 


//multiple scope example with function

function one (){
    const username ="umang"
    function two(){
        const website="Patel"
        console.log(username)
    }                                                       // one is parent and two is child
    // console.log(website)                                //child function can access vars of parent func but parent cant 
    two()
}
// one()


// with if else


if(true){
    const username ="umang"

   if(username==="umang"){
    const website=" patel"
    // console.log(username +website )
   }  
//    console.log(website) 

}

// console.log(username)



//+++++++++++++++++++++++++ interisting example +++++++++++++++++++++++++

console.log(addnum(5))
function addnum(num){
    return num+=1

}
/* here we have two functions both are correct way to define functions
but in first one we can execute it without error and second one will show error
because there is concept in js called hoisting basically hoisting allows us to access variable 
before intialization */

// console.log(addtwonum(4))
const addtwonum= function addsecnum(num){
    return num +=2
}



