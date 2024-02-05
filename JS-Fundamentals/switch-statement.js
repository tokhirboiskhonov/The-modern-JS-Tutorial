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

