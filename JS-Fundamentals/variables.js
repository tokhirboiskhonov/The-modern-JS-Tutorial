// ! VARIABLES

// Most of the time, a JavaScript application needs to work with information. Here are two examples:

// An online shop – the information might include goods being sold and a shopping cart.
// A chat application – the information might include users, messages, and much more.

// Variables are used to store this information.

// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

// To create a variable in JavaScript, use the var keyword.

// There are 3 types variables in JavaScript. However there is only one type variable before ES6, which is "var"

// ! 1. const --> The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed. Hoisting is working as well, but it will be error. (ReferenceError: ReferenceError: Cannot access 'message' before initialization).
// console.log(message);
const message = "Hi";
console.log(message);

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42

// Uppercase constants

// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

// Such constants are named using capital letters and underscores.

// For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
// alert(color); // #FF7F00

// Benefits:

// COLOR_ORANGE is much easier to remember than "#FF7F00".
// It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
// When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.

// ! 2. let -->The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 1

// ! 3. var --> The var statement declares function-scoped or globally-scoped variables, optionally initializing each to a value. Hoisting is working, but output will be undefined. If it declares globally, it will write into a window global object. (but you can't use let and const declare into a window global object, and it will be secure your project. it means more safely). At least, you can redeclaring variable using var, however with let and const can't redeclare.

var y = 1;

if (y === 1) {
  var y = 2;

  console.log(y);
  // Expected output: 2
}

console.log(y);
// Expected output: 2

// *** Tasks ***

// *** Working with variables ***

// 1. Declare two variables: admin and name.
// 2. Assign the value "John" to name.
// 3. Copy the value from name to admin.
// 4. Show the value of admin using alert (must output “John”).

// Solution

// let admin, name;

// name = "John";

// admin = name;

// alert(admin);
