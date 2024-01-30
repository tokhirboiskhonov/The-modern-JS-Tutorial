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

