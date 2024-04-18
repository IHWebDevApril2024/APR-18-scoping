// SCOPE
const username = "Mica"; // this variable is in the global scope
function sayHi() {
  const username = "Oriol"; // this variable is limited to the scope of the function, NOT RECOMMENDED TO NAME VARIABLES WITH THE SAME NAME

  console.log(`Hi, ${username}`);
}

sayHi();

console.log(username);

function sayHiWIthGlobal() {
  console.log(`Hello, ${username}`);
}

sayHiWIthGlobal();

// Can we modify a global variable inside a function?

let bootcamp = "Ironhack";
function modifyBootcamp() {
  bootcamp = "Another bootcamp";
}

modifyBootcamp();

console.log(bootcamp);

// YES WE CAN

for (let index = 0; index < 10; index++) {
  const element = index;
  // same thing with for loops, this variables are only available on this scope.
  console.log(element);
}



function setDate(){
    date = "18/04/2024";
    
}
// date = "hellooooo";

setDate();

// HOISTING
console.log(hello); // This is going to be undefined
var hello = "this is the initial value";

function modifyHello(){
    hello = "This is the var hello"
}

modifyHello()
