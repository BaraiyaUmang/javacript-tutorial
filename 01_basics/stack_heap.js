//stack memory is used in primitive data types and heap memory is used in reference data types


//stack memory returns the value of the variable lets understand with an example 
//it returns the copy of the value of the variable so if we change the value of the variable it will not affect the other variable

let a = 10;
let b = a;
a = 20;

console.log(a); //20
console.log(b); //10

/*here you can see that eventhough we changed the value of a to 20 the value of b is still 10 because the value of a is stored in stack memory 
and when we change the value of a it will not affect the value of b because the value of a is stored in stack memory and the value of b is also 
stored in stack memory*/




//heap memory returns the reference of the variable lets understand with an example
//it returns the reference of the variable so if we change the value of the variable it will affect the other variable

let obj1 = {name: 'john'};
let obj2 = obj1;
obj1.name = 'peter';

console.log(obj1); //{name: 'peter'}
console.log(obj2); //{name: 'peter'}


/*here you can see that when we change the value of obj1 to peter the value of obj2 is also changed to peter
because the value of obj1 is stored in heap memory */

//this is the difference between stack memory and heap memory








