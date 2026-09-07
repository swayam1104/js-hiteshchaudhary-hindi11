//const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123swa";
tinderUser.name = "Swayam";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const ob1 = {1:"a", 2: "b"};
const ob2 = {3:"c", 4: "d"};
const ob3 = { ob1, ob2 };
console.log(ob3);

const ob4 = Object.assign({},ob1, ob2);
console.log(ob4);

const ob5 = {...ob1, ...ob2};
console.log(ob5);

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // batayega ki ye properrty h ya nhi

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Amull"
}
const {courseInstructor : teacher} = course;
console.log({teacher});