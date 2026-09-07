const user = {
    username: "amulll",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Swayam"
// user.welcomeMessage();
console.log(this)  //{} aayega output, but fun m kroye ye to gaan faad dega

function daaru() {
    let username = "Khushal"
    console.log(this.username); 
}
daaru();

const  beer = () => {
    let username = "shivam"
    console.log(this)
}
beer()

const addTwo = (num1, num2) => { //explicit return
    return num1 + num2
}
console.log(addTwo(325,4235))

const addThree = (num1, num2, num3) => (num1 + num2 - num3); //implicit return
console.log(addThree(34,524,23));