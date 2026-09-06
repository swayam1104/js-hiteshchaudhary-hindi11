//DATES

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,56);
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleTimeString());
let myNewDate = new  Date("11-11-2007");


let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myNewDate.getTime());
