//dates 

let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());

let myCreatedDate= new Date(2025,0,23);
// let myCreatedDate= new Date(2025,0,23,5,3);
// let myCreatedDate= new Date("2025-01-23");
// let myCreatedDate= new Date("01-23-2025");
console.log(myCreatedDate.toLocaleString());


let myTimeStamp=Date.now();
console.log(myTimeStamp);            //timestamp in milliseconds it starts from 1970

console.log(myCreatedDate.getTime()); //timestamp in milliseconds it starts from 1970
console.log(Math.floor(Date.now()/1000));            //timestamp in seconds it starts from 1970

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());

console.log(newDate.toLocaleString("default",{
    month:"long",
    weekday:"long",
    day:"numeric",
    year:"numeric",
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    timeZoneName:"short"
}));