//! Logical operators

// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

// Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

// Let’s see the details.

//*  OR

// The "OR" operator is represented with two vertical line symbols:

// result = a  b;

// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

// In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

// There are four possible logical combinations:

// alert(true || true); // true
// alert(false || true); // true
// alert(true || false); // true
// alert(false || false); // false

// As we can see, the result is always true except for the case when both operands are false.

// If an operand is not a boolean, it's converted to a boolean for the evaluation.

// For instance, the number 1 is treated as true, the number 0 as false:

// if (1 || 0) {
// works just like if(true || false)
//   alert("Truthy!");
// }

// Must of the time, OR || is used in an if statement to test if any of the given condition is true.

// For example:

// let hour = 9;
// if (hour < 10 || hour > 18) console.log("The office is closed.");

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   console.log("The office is closed!"); //this condition will be work!
// } else {
//   console.log("The office is opened!");
// }

//* OR "||" finds the first truthy value

// The logic described above is somewhat classical. Now let's bring in the "extra" features of JS.

// The extended algorithm works as follows.

// Given multiple OR'ed values:

//? result = value1 || value2 || value3;

// The OR || operator does the following:

//? 1. Evaluates operands from left to right.
//? 2.  For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
//? 3. If all operands have been evaluated (i.e. all were false), returns the last operand.

// A value is returned in its original form, without the conversion.

// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

// For instance:

// alert(1 || 0); // 1 (1 is truthy)

// alert(null || 1); // 1 (1 is the first truthy value)
// alert(null || 0 || 1); // 1 (the first truthy value)

// alert(undefined || null || 0); // 0 (all falsy, returns the last value)

//! 1. Getting the first truthy value from a list of variables or expressions.

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// console.log(firstName || lastName || nickName || "Anonymous"); // output is SuperCoder.

// If all variables were falsy, "Anonymous" would show up.

//! 2. Short-circuit evaluation.

// true || alert("not printed");
// false || alert("printed");

// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
// Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

//*  &&(AND)

// The AND operator is represented with two ampersands &&:

// result = a && b

// In classical programming, AND returns true if both operands are truthy and false otherwise:

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// let hours = 12;
// let minute = 30;

// if (hours == 12 && minute == 30) {
//   console.log("The time is 12:30");
// }

// Just as with OR, any value is allowed as an operand of AND:

// if (1 && 0) {
// evaluated as true && false
//   alert("won't work, because the result is falsy");
// }

