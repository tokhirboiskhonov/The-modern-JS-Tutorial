//! Conditional branching: if, '?'

// Sometimes, we need to perform different actions based on different conditions.

//* The "if" statement

// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// For example:

// let year = +prompt(
//   "In which year was ECMAScript-2015 specification published?",
//   ""
// );

// if (year == 2015) alert("You are right!");

// if we want to execute more than one statement, we have to wrap our code block inside curly braces:

// if (year == 2015) {
//   alert("That's correct!");
//   alert("You're so smart!");
// }

//* Boolean conversion

// The if(...) statement evaluates the expression in its parentheses and converts the result to a boolean.

//? A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

//? Other values become true, so they are called “truthy”.

// So, the code under this condition would never execute:

// if(0){ // 0 is falsy
// 	...
// }

// ...and inside this condition - it always will:

// if(1){ // 1 is truthy
// 	...
// }

// We can also pass a pre-evaluated boolean value to if, like this:

// let cond = year == 2015; // equality evaluates to true or false

// if(cond){
// 	...
// }

//* The "else" clause

//? The if statement may contain an optional else block. It executes when the condition is falsy.

// For example:

// let year = prompt(
//   "In which year was the ECMAScript-2015 specification published?",
//   ""
// );

// if (year == 2015) {
//   alert("You guessed it right!");
// } else {
//   alert("How can you be so wrong?"); // any value except 2015
// }

//* Several conditions: “else if”

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

// For example:

// let year = prompt(
//   "In which year was the ECMAScript-2015 specification published?",
//   ""
// );

// if (year < 2015) {
//   alert("Too early...");
// } else if (year > 2015) {
//   alert("Too late");
// } else {
//   alert("Exactly!");
// }

//* Conditional operator "?"

// let accessAllowed;

// let age = +prompt("How old are you?", "");

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

//? The syntax is:

//? let result = condition ? value1 : value2;

// let accessAllowed = age > 18 ? true : false;

//* Multiple ‘?’

// let age = +prompt("age?", 18);

// let message =
//   age < 3
//     ? "Hi baby!"
//     : age < 18
//     ? "Hello"
//     : age < 100
//     ? "Greatings"
//     : "What an unusual age!";

// alert(message);

// Here’s how this looks using if..else:

// if (age < 3) {
//   message = "Hi, baby!";
// } else if (age < 18) {
//   message = "Hello!";
// } else if (age < 100) {
//   message = "Greetings!";
// } else {
//   message = "What an unusual age!";
// }

//* Non-traditional use of "?"

// Sometimes the question mark ? is used as a replacement for if:

// let company = prompt("Which company created JavaScript?", "");

// company == "Netscape" ? alert("Right!") : alert("Wrong.");

// Here is the same code using if for comparison:

// let company = prompt("Which company created JavaScript?", "");

// if (company == "Netscape") {
//   alert("Right!");
// } else {
//   alert("Wrong.");
// }

//* Tasks

//! 1. Will alert be shown?

// if ("0") {
//   alert("Hello"); // output is Hello
// }

//! 2. The name of JavaScript

// let output = prompt("What's the “official” name of JavaScript?", "");

// if (output == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don't know? “ECMAScript”!");
// }

//! 3. Show the sign

// let num = +prompt("Type a number", "0");

// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

//! 4. Rewrite "if" into "?"

// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

let result = a + b < 4 ? "Below" : "Over";

//! 5. Rewrite "if...else" into "?"

// let message;

// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
