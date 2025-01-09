//for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is og number");
        
    }
    // console.log(element);
    
}


for (let i = 0; i <=10; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop value: ${j} and inner ${i}`)
        // console.log(i + '*' + j + ' = '+ i*j );
        
        
        
    }
    
}


let myarray=["k","j","l"];
// console.log(myarray.length);


for(i=0;i<myarray.length;i++){
    const element =myarray[i];
    // console.log(element);
}



//break and continue

for(i=1;i<=20;i++){
    if(i==5){
        // console.log("5 detected");
        break;                                //all code after break wont be executed
    }
    // console.log(`the value of i is ${i}`)


}
for(i=1;i<=20;i++){
    if(i==5){
        // console.log("5 detected");
        continue;                                //only specified code will be breaked remaining code executes normally
        
    }
    console.log(`the value of i is ${i}`)


}