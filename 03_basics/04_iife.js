//Immediately Invoked Function Expression (IIFE)
(function chai() {
    //named iife
    console.log(`Hello Swayam`);
})();

( (name) => {
    //unmaned iife
    console.log(`Chhupppp ${name}`);
})('Swayam')