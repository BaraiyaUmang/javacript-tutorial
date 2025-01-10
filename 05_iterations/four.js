const myobj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}

// for in loop  

for (const key in myobj) {

    console.log(`${key} is shortcut for ${myobj[key]}`)
           
}



const prog=["js","java","cpp","ruby"];

for (const key in prog) {
        console.log(`${key} is index of ${prog[key]}`);            // here for in loop gave index or key of the array instead values

        
         
    
}