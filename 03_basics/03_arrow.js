const user ={
    username:"umang",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

user.welcomemessage()
user.username="sam"
user.welcomemessage()


console.log(this)


function chai(){
    let username="umang"
    console.log(this.username);  // this wont work in function it will say undefined  
}

chai()



const chai = ()=>{
    console.log("hello world")
}
chai()

const sqrtwo=(q,r)=>{
    return q**r
}
console.log(sqrtwo(2,3))

const addtwo=(q,r)=>{
    return q+r
}
console.log(addtwo(2,3))


//implicit return 

const addtwo0=(num1,num2)=>num1+num2
const addtwo1=(num1,num2)=>(num1+num2)       //used in react so it is important
const addtwo2=(num1,num2)=>({username:"umang"})   //to execute object in implicit return
console.log(addtwo0(34,56))                       //we need to put it into ()
console.log(addtwo1(34,56))                       //we need to put it into ()
console.log(addtwo2(34,56))                       //we need to put it into ()



