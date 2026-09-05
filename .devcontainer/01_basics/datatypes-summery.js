//primitive
// 7 types: String, Number, Boolean, null, undefined, symbol, bigint


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id == anotherId);

const scoreValue = 3492358928942;
// console.log(typeof scoreValure);
// console.log(typeof null);


//reference types
//array, objects, functions 



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non Primitive)

let myName = "Swayam Shekhar"
let homeName = myName
console.log(homeName);
homeName = "Amull"
console.log(myName);
console.log(homeName);


//HEAPS properties
let userOne = {
    name: "Swayam",
    usn: 214
}
let userTwo = userOne;
userTwo.usn = 213
console.log(userOne.usn);
console.log(userTwo.usn);