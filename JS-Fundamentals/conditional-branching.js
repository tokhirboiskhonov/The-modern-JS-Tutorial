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

