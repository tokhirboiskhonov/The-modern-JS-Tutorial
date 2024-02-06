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

//* Parameters

// We can pass arbitary data to a functions using parameters.

// In the example below, the function has two parameters: from and text.

// function showMessage(from, text) {
// parameters: from, text
//   console.log(`${from}: ${text}`);
// }

// showMessage("Ann", "Hello!"); // Ann: Hello! (*)
// showMessage("Ann", "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

// Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage(from, text) {
  from = `*${from}*`; //make "from" look nicer

  console.log(`${from}: ${text}`);
}

let from = "Ann";

showMessage(from, "Hello"); // output: *Ann*: Hello

console.log(from);

//* Default values

function showMessage(from, text = "no text given.") {
  console.log(`${from}: ${text}`);
}

// showMessage("Ann"); //output: Ann: no text given.
showMessage("Ann", "Hello!"); //output: Ann: Hello!
// showMessage("Ann", undefined); //output: Ann: no text given.

function showMessage(from, text = anotherFunc()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text

  console.log(`${from}: ${text}`);
}

function anotherFunc() {
  return "Hello everyone!";
}

showMessage("Tokhir");

//? Evaluation of default parameters
// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
// On the other hand, it’s independently called every time when text is missing.

//! Default parameters in old JavaScript code

// Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify them.

// Nowadays, we can come across them in old scripts.

//? For example, an explicit check for undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = "no text given";
  }

  console.log(from + ": " + text);
}

showMessage("Anna"); // output: Anna: no text given
showMessage("Anna", "Hello everyone!"); // output: Anna: Hello everyone!

//? …Or using the || operator:

function showMessage(from, text) {
  text = text || "no text given";

  console.log(`${from}: ${text}`);
}

showMessage("Maxim"); //output: Maxim: no text given

showMessage("Maxim", "Hi there!"); //output: Maxim: Hi there!

//? …Nullish coalescing operator using the ??:

function showCount(count) {
  //if count is undefined or null, show "uknown"

  console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); //unknown

//* Returing a value

// A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(3, 4);

console.log(result);

// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
// There may be many occurrences of return in a single function. For instance:

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }

//   alert("Showing you the movie"); // (*)
// }

// let age = +prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted!");
// } else {
//   alert("Access denied.");
// }

// showMovie();

//! A function with an empty return or without it returns undefined

//? If a function does not return a value, it is the same as if it returns undefined:

// function doNothing() {
/* empty */
// }

// alert(doNothing() === undefined); // true

//? An empty return is also the same as return undefined:

// function doNothing() {
//   return;
// }

// alert(doNothing() === undefined); // true

//* Naming a function

// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

//? "get…" – return a value,
//? "calc…" – calculate something,
//? "create…" – create something,
//? "check…" – check something and return a boolean, etc.

// Examples of such names:

//? showMessage(..)     // shows a message
//? getAge(..)          // returns the age (gets it somehow)
//? calcSum(..)         // calculates a sum and returns the result
//? createForm(..)      // creates a form (and usually returns it)
//? checkPermission(..) // checks a permission, returns true/false

