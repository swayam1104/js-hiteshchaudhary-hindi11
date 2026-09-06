//singleton
//object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Dheeraj",
    "full Name": "Dheeraj Singh",
    [mySym]: "myKey1",
    age: 18,
    location: "Bengaluru",
    email: "swayam@google.com",
    loggedIn: false 
};

console.log(JsUser["full Name"]);
console.log(JsUser.location);
console.log(typeof JsUser[mySym]);

JsUser.email = "swayam@gemini.com";
console.log(JsUser.email);
//Object.freeze(JsUser); iske baad object m changes nhi kr skte
JsUser.email = "swayam@chatgpti.com";
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Swayam, from JS!!");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JsUser: ${JsUser.name}`);
    console.log(`Hello JsUser ur age is: ${this.age}`);


}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
