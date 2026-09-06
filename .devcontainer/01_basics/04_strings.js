const name = "Swayam";
const repoCount = 100
console.log(`My Name is ${name} and my body Count is ${repoCount}.`);

const gameName = new String('game-of-Thrones-da-real-series');
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.charAt(8));
console.log(gameName.indexOf('T'));

const newString = gameName.substring(0,8);
console.log(newString);

const anotherString = gameName.slice(-8);
console.log(anotherString);

const myName = "     amulll   ";
console.log(myName.trim());

const url = "https://swayamdotcom%20/swayam.com";
console.log(url.replace('%20','xxx'));

console.log(gameName.split('-'));