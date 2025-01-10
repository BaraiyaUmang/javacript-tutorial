const codding=["js","ruby","java","python","cpp"];

// codding.forEach(function (val) {
//     console.log(val)                        //normal function
    
// });

// codding.forEach((val)=>{
//     console.log(val)                       //arrow function
// })


// function printme(item){
//     console.log(item)

// }

// codding.forEach(printme)                     //first declaring func then passing it as para in for each



codding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)             //foreach has three para 1--item  2--indexof arr
})                                                   // and 3-- arr it self



const mycoding=[
    {
        langname:"javascript",
        langfilename:"js"
    },

    {
        langname:"ruby",
        langfilename:"rb"
    },

    {
        langname:"java",
        langfilename:"java"
    }
]


mycoding.forEach((val)=>{
    console.log(val.langfilename);
    

})

