sum(8, 8); // this is going to work because of hoisting

function sum(a, b) {
  console.log(a + b);
}

const sumArrow = (a, b) => {
  console.log(a + b);
};

sumArrow(8, 8); // we can only call functions inside const variables after they are declared

// SHAODWING

let computer = "Thinkpad";

function shadowing() {
  let computer = "Mackbook"; // This is shadowing because we are using a new variable with the same name and a different value
  console.log(computer);
}

shadowing();
console.log(computer);
