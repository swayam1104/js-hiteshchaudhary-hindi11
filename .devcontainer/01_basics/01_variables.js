const accountId = 111104
let accountEmail = "swayam@google.com"
let accountState ;

/*
prefer not to use var beacause the issue in block scope and functional scope... 
let variables can be changed unlike const variables
*/

// accountId = 110404;
console.log(accountId);
accountEmail = "ss@ss.com"
accountCity = "Bengaluru"
accountPassword = "212121"

console.table([accountId, accountEmail, accountCity, accountPassword, accountState]);
