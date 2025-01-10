// const codding=["js","html","css","java"];

// const values=codding.forEach((items)=>{
//     console.log(items)
//     return items                                // here for each gives undefined values for this array
// })                                              //so we can say that for each doesnot return array

// console.log(values)



const mynums=[1,2,3,4,5,6,7,8,9,10];

// const newnums=mynums.filter((num)=>{
//     return num>4
// })   

const newnums=[]

mynums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }                               // it can work but it is harder than filter so why bother 

})

console.log(newnums)                                         