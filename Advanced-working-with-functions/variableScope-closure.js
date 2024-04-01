//* Tasks

//! 1. Does a function pickup latest changes?

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // Hi, Pete

//! 2. Which variables are available?

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // Pete

