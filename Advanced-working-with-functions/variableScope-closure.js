//* Variable scope, closure

// JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment, passed as an argument to another function, and then called from a totally different place of code later.

// We already know that a function can access variables outside of it (“outer” variables).

// But what happens if outer variables change since a function is created? Will the function get newer values or the old ones?

// And what if a function is passed along as an argument and called from another place of code, will it get access to outer variables at the new place?

// Let’s expand our knowledge to understand these scenarios and more complex ones.

//? We’ll talk about let/const variables here
// In JavaScript, there are 3 ways to declare a variable: let, const (the modern ones), and var (the remnant of the past).

// In this article we’ll use let variables in examples.
// Variables, declared with const, behave the same, so this article is about const too.
// The old var has some notable differences, they will be covered in the article The old "var".

//* Code blocks

// If a variable is declared inside a code block {...}, it’s only visible inside that block.

// For example:

{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  console.log(message); // Hello
}

console.log(message); // Error: message is not defined

// We can use this to isolate a piece of code that does its own task, with variables that only belong to it:

{
  // show message
  let message = "Hello";
  console.log(message);
}

{
  // show another message
  let message = "Goodbye";
  console.log(message);
}

//? There’d be an error without blocks

// Please note, without separate blocks there would be an error, if we use let with the existing variable name:

// show message
// let message = "Hello";
// console.log(message);

// show another message
// let message = "Goodbye"; // Error: variable already declared
// console.log(message);

// For if, for, while and so on, variables declared in {...} are also only visible inside:

if (true) {
  let phrase = "Hello!";

  console.log(phrase); // Hello!
}

console.log(phrase); // Error, no such variable!

// Here, after if finishes, the alert below won’t see the phrase, hence the error.

// That’s great, as it allows us to create block-local variables, specific to an if branch.

// The similar thing holds true for for and while loops:

for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  console.log(i); // 0, then 1, then 2
}

console.log(i); // Error, no such variable

// Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.

//* Nested functions

// A function is called “nested” when it is created inside another function.

// It is easily possible to do this with JavaScript.

// We can use it to organize our code, like this:

function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log("Hello, " + getFullName());
  console.log("Bye, " + getFullName());
}

// Here the nested function getFullName() is made for convenience. It can access the outer variables and so can return the full name. Nested functions are quite common in JavaScript.

// What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. No matter where, it still has access to the same outer variables.

// Below, makeCounter creates the “counter” function that returns the next number on each invocation:

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter1 = makeCounter();

alert(counter1()); // 0
alert(counter1()); // 1
alert(counter1()); // 2

// Despite being simple, slightly modified variants of that code have practical uses, for instance, as a random number generator to generate random values for automated tests.

// How does this work? If we create multiple counters, will they be independent? What’s going on with the variables here?

// Understanding such things is great for the overall knowledge of JavaScript and beneficial for more complex scenarios. So let’s go a bit in-depth.

//* Lexical Environment

function outer() {
  var x = 10;
  function inner() {
    // The lexical environment of `inner()` contains the variable `x` from `outer()`.
    console.log(x);
  }
  inner();
}
outer();

//* Garbage collection

// Usually, a Lexical Environment is removed from memory with all the variables after the function call finishes. That’s because there are no references to it. As any JavaScript object, it’s only kept in memory while it’s reachable.

// However, if there’s a nested function that is still reachable after the end of a function, then it has [[Environment]] property that references the lexical environment.

// In that case the Lexical Environment is still reachable even after the completion of the function, so it stays alive.

//! Here be dragons!

// The in-depth technical explanation lies ahead.

// As far as I’d like to avoid low-level language details, any understanding without them would be lacking and incomplete, so get ready.

// A lexical environment in JavaScript is a data structure that stores the variables and functions that are defined in the current scope and all of the outer scopes. It is also known as the lexical scope or the lexical closure.

// The lexical environment is created when a function is called and destroyed when the function returns.

// The lexical environment is used to resolve variable names. When the JavaScript interpreter encounters a variable name, it first searches for the variable in the lexical environment of the current scope. If the variable is not found in the current scope, the interpreter searches the lexical environment of the outer scope, and so on.

// The interpreter continues searching the lexical environment until it finds the variable or it reaches the global scope. If the variable is not found anywhere in the lexical environment, the interpreter throws a ReferenceError exception.

//! Real-life optimizations

// As we’ve seen, in theory while a function is alive, all outer variables are also retained.

// But in practice, JavaScript engines try to optimize that. They analyze variable usage and if it’s obvious from the code that an outer variable is not used – it is removed.

// An important side effect in V8 (Chrome, Edge, Opera) is that such variable will become unavailable in debugging.

// Try running the example below in Chrome with the Developer Tools open.

// When it pauses, in the console type alert(value).

// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // in console: type alert(value); No such variable!
//   }

//   return g;
// }

// let g = f();
// g();
// As you could see – there is no such variable! In theory, it should be accessible, but the engine optimized it out.

// That may lead to funny (if not such time-consuming) debugging issues. One of them – we can see a same-named outer variable instead of the expected one:

let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    debugger; // in console: type alert(value); Surprise!
  }

  return g;
}

let g = f();

g();

// This feature of V8 is good to know. If you are debugging with Chrome/Edge/Opera, sooner or later you will meet it.

// That is not a bug in the debugger, but rather a special feature of V8. Perhaps it will be changed sometime. You can always check for it by running the examples on this page.

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

//! 3. Are counters independent?

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // 0
// console.log(counter2()); // 1

//! 4. Counter object

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1

//! 5. Function in if

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // Hello, John

//! 6. Sum with closures

function sum(a) {
  return function (b) {
    console.log(a + b);
  };
}

sum(1)(2); // 3
sum(5)(-1); // 4

//! 7. Is variable visible?

let x = 1;

function func() {
  console.log(x); // ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}

func();

//! 8. Filter through function

/* .. your code for inBetween and inArray */

function inBetween(a, b) {
  return function (elem) {
    return elem >= a && elem <= b;
  };
}

function inArray(arr) {
  return function (el) {
    return arr.includes(el);
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//! 9. Sort by field

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

// Sort by name
users.sort(byField("name"));
console.log(users); // Output: [{ name: "Ann", age: 19, surname: "Hathaway" }, { name: "John", age: 20, surname: "Johnson" }, { name: "Pete", age: 18, surname: "Peterson" }]

// Sort by age
users.sort(byField("age"));
console.log(users);

// Sort by surname
users.sort(byField("surname"));
console.log(users);

//! 10. Army of functions

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // create a shooter function,
      console.log(j); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2]();
