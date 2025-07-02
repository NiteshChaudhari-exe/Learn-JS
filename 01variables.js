// code readability should be high


const accountId = 12345
let accountEmail = "legendsauthority@google.com"
var accountPassword = "3456"
accountCity = "Kathmandu"


accountEmail = "changed@google.com"
accountPassword = "789"
accountCity = "Janakpur"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);


/*
Prefer 'Var' not to use because of 
block scope and functional scope
*/