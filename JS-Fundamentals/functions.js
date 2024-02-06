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

