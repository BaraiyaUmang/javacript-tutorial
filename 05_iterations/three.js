//for of loop 

//["","",""]
//[{}{}{}]

const arr =[1,2,3,4,5];

for (const num of arr) {
    // console.log(num);    
}


const string="hello   world "
for (const str of string) {
    if (str==" ") {
        continue
        
    }
    // console.log(str)
    
}


//maps 
const map =new Map()
map.set("IN","india")
map.set("USA","United states of america")
map.set("UK","United kingdom")
map.set("IN","india")         // map is known for duplicate values it doesnot add same value again

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value)
    
}


