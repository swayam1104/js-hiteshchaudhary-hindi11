const score = 400;
console.log(score);
console.log(typeof score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toString);
console.log(typeof balance);

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++MATHSSSSSS+++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.731));
console.log(Math.round(Math.random())*98);

const min = 10;
const max = 100;
console.log(Math.floor(Math.random() * (max-min + 1)) + min);