//immdiately invoked Expressions (IIFE)
//named iife 
(function chai(){
    console.log("Hello, World!");
})();                                // here ; is necessary or it wont now when to end the scope and will throw error

//simple iife without function name
(()=>{
    console.log("Hello, Dunia");      //these are the iife functions we dont need to invoke them
})();

// they get invoked by them selves

((Number)=>{
    console.log(`Hello, Dunia ${Number}`);   //in case we need to pass parameters in iife we
})(2);                                         // simply add them like this 




// here we gonna discuss very important concept for interview and also important in js

// javascript execution context

//----> basically it shows how file gets excuted or run in interpreter

/* when we run any code file first of all a global executuion context gets created after that
it is refered to this variable and also it is diffrent for browser,node,dino etc 
in browser value of this will be window object 
we know what is window object it is created by browser by default and it stores some inbuilt
methods and properties like alert,confirm,setTimeout etc */

//global execution context
//function execution context
//eval execution context      

// js Es has  two phase 


// first global execution context then two phase
/* 1. memory creation phase
  in this phase all the variables and function defination stored in memory 
  it creates memory for them that is why it is called memory creation or memory
  allocation phase 
  in memory allocation phase first it stores value as undefined
  for variables and in function it stores whole function defination in memory
  now this phase ends with this procedure*/

// 2.execution phase

/* now code execution begins all the variable stored in memory gets assgined with their value
 written in code 
 as for the functions when function is invoked it creates its own new execution context 
 it also has two phase and it allocates memory and executes it 
 but note that after work of that ec is done it gets deleted 
  and reuslt of that function will be returned to globale execution context
  this hapens in loop for every function present in code */


  // call stacks  

 /* The call stack is a data structure that keeps track of function calls in a 
 Last-In-First-Out (LIFO) manner. When a function is called, its execution context
  is pushed onto the call stack. When the function finishes executing, its execution 
  context is popped off the stack.*/
























































