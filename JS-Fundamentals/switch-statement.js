// !  The "switch" statement

// A switch statement can replace multiple if checks.

// It gives a more

// It gives a more descriptive way to compare a value with multiple variants.

//* The syntax

// The switch has one or more case blocks and an optional default.

// It looks like this:

// switch (x) {
//   case "value1":
//     break;

//   default:
//     break;
// }

//? An example

let a = 2 + 2;

switch (a) {
  case 3:
    console.log("Too small");
    break;

  case 4:
    console.log("Exactly!");
    break;

  case 5:
    console.log("Too big");
    break;

  default:
    console.log("I don't know such values");
}

//? Any expression can be a switch/case argument

// Both switch and case allow arbitrary expressions.

// For example:

let c = "1";
let d = 0;

switch (+c) {
  case d + 1:
    alert("this runs, because +c is 1, exactly equals d+1");
    break;

  default:
    alert("this doesn't run");
}
// Here +c gives 1, that’s compared with d + 1 in case, and the corresponding code is executed.

//* Grouping of "case"

// Several variants of case which share the same code can be grouped.

// For example, if we want the same code to run for case 3 and case 5:

let num = 3;

switch (num) {
  case 4:
    console.log("Right!");
    break;
  case 3:
  case 5:
    console.log("Wrong!");
    console.log("Why don't you take a math class?");
    break;
  default:
    console.log("The result is strange. Really!!!");
}

//* Type matters

// Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

// For example, let’s consider the code:

let arg = prompt("Enter a value?");
switch (arg) {
  case "0":
  case "1":
    console.log("One or zero");
    break;

  case "2":
    console.log("Two");
    break;

  case 3:
    console.log("Never executes!");
    break;
  default:
    console.log("An unknown value");
}
