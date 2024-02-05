//! Loops: while and for

// We often need to repeat actions.
// For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.
// Loops are a way to repeat the same code multiple times.

//* The "while" loop

// The while loop has the following syntax:

// while (condition) {
//   //code
//   // so-called "loop body"
// }

// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

// let i = 0;

// while (i < 3) {
//   console.log(i);
//   i++;
// }

// let i = 3;
// while (i) {
// when i becomes 0, the condition becomes falsy, and the loop stops
//   console.log(i);
//   i--;
// }

//? A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

//! Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:

// let i = 3;
// while (i) alert(i--);

// The "do ... while" loop

// The condition check can be moved below the loop body using the do..while syntax:

// do {
//   // loop body
// } while (condition);

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// For example:

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

//? This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

//* The for loop

// The for loop is more complex, but it's also the most commonly used loop.

// It looks like this:

// for (begin; condition; step) {
//   // ... loop body ...
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// let i = 0;

// for (i = 0; i < 3; i++) { // use an existing variable
//   alert(i); // 0, 1, 2
// }

// alert(i); // 3

//* Skipping parts

// Any part of for can be skipped.

// For example, we can omit begin if we don’t need to do anything at the loop start.

// Like here:

// let i = 0;

// for (; i < 3; i++) {
//   console.log(i);
// }

// We can also remove the step part:

// let idx = 0;

// for (; idx < 3; ) {
//   console.log(idx++);
// }

// We can actually remove everything, creating an infinite loop:

// for (;;) {
//   // repeats without limits
// }

// Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.

//* Breaking the loop

//Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

// For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

// let sum = 0;

// while (true) {
//   let value = +prompt("Enter a number", "");

//   if (!value) break;

//   sum += value;
// }

// alert(`Sum: ${sum}`);

//* Continue to the next iteration

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows

// We can use it if we’re done with the current iteration and would like to move on to the next one.

// The loop below uses continue to output only odd values:

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;

//   alert(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     alert(i);
//   }
// }

//! No break/continue to the right side of ‘?’
//? Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

//? For example, if we take this code:

// if (i > 5) {
//   alert(i);
// } else {
//   continue;
// }
// …and rewrite it using a question mark:

// (i > 5) ? alert(i) : continue; // continue isn't allowed here

// …it stops working: there’s a syntax error.

// This is just another reason not to use the question mark operator ? instead of if.

//* Labels for break/continue

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = +prompt(`Value at coords (${i}, ${j})`, "");
//   }
// }

// alert("Done!");

tashqi: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = +prompt(`Value at coords (${i}, ${j})`, "");

    if (!input || typeof input !== "number") break tashqi;
  }
}

alert("Done!");

//* Summary

//! We covered 3 types of loops:

//? while – The condition is checked before each iteration.
//? do..while – The condition is checked after each iteration.
//? for (;;) – The condition is checked before each iteration, additional settings available.

// To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

// If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
