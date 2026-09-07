// let a = 10;
// const b = 20
// var c = 30
let a = 100
if(true) {  //scope k andr k elements bahar nhi access kr skte... like this smjh jana nhi to chatgpt m daal k dekh lena
    let a = 10
    const b = 20
    console.log("Inner: ", a);
}
//console.log(a);
//console.log(b);

function one() {
    const username = "swayam"

    function two() {
        const website = "youtube"
        console.log(username)
        console.log(website)
    }
    //console.log(website)  // function k andr function ko bahar waale function m access nhi kr skte
    two();
}
one();


if(true) {
    const username = "AMULLL!!!"
    if(true) {
        const website = " Instagram"
        console.log(username + website);
    }
    //console.log(website) // error aa gya na
}
//console.log(username ); error: scope k bahar nhi access h bhai 



//++++++++++  INSTRESTING  ++++++++

function addOne(num) { // normal functions kabhi v call kro kabhi v declare kro... ma chudaye vo sb
    return num + 1;
}
console.log(addOne(5));

console.log(addTwo(4))  // agar variable m function store kr rhe to usko baad m call krna
const addTwo = function(num) {
    return num + 2
}
