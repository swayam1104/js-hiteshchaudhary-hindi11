function addTwoNumbers(number1, number2) {
    //console.log(number1 + number2);
    let result = (number1 + number2);
    return result; 
}
addTwoNumbers(343,"34324");
const res = addTwoNumbers(321,null);
console.log(res);

function loginUserMessage(username = "swayam") { // agr paramenetr de diye to minimum ye pass hoga agr baahar kch pass nhi kiya h to
    if(username === undefined) {  // nhi to jo tumne bahaar pass kiya h parameter vi pass hoga
        console.log("Bhadwe username to daal")
        return
    }
    return `${username} just loggedin...!!!`;
}
console.log(loginUserMessage("Bhadwa"))


function calculateCartPrice(val1, val2, ...num1) {  //rest operator (kitna v parameter pass kr do... sbko mention kr dega )
    return num1;                                    // first two val1 and val2 m store hoga, fir baad m sb num1 m store hoga
}
console.log(calculateCartPrice(200,455,213,42352,657,3141,54636));

const user = {
    name: "Swayam",
    usn: 4234
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and usn is ${anyObject.usn}`);
} 
handleObject(user);


const myNewArray = [200,400,500,600];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([232,3124,2543,2134,434]));