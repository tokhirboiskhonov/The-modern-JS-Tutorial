//! Functions

// Quite often we need to perform a similar action in many places of the script.

// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

//* Function Declaration

// To create a function we can use a function declaration

// It looks like this:

// function showMessage() {
//   console.log("Hello everyone!");
// }

// function name(parameter1, parameter2, ...parameterN) {
//body
// }

// Our new function can be called by its name: showMessage().

// For instance:

// function showMessage() {
//   console.log("Hello everyone!");
// }

// showMessage();
// showMessage();

// The call showMessage() executes the code of the function. Here we will see the message two times.

// This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

// If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

//* Local variables

// A variable declared inside a function is only visible inside that function.

// For example:

// function showMessage() {
//   let message = "Hello, I'm Tokhir";
//   console.log(message);
// }

// showMessage(); // Hello, I'm Tokhir

// alert(message); // <-- Error! The variable is local to the function

//* Outer variables

// A function can access an outer variable as well, for example:

// let userName = "Tokhir";

// function showMessage() {
//   let message = `Hello ${userName}!`;
//   console.log(message);
// }

// showMessage(); // Hello Tokhir!

// The function has full access to the outer variable. It can modify it as well.

// let userName = "John";

// function showMessage() {
//   userName = "Steve";
//   let message = `Hello ${userName}`;
//   alert(message);
// }

// alert(userName);

// showMessage();

// alert(userName);

//? The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName = "John";

function showMessage() {
  let userName = "Bob";
  let message = `Hello ${userName}`;
  console.log(message);
}

console.log(userName);

showMessage();

console.log(userName);

//* Global variables

// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.
