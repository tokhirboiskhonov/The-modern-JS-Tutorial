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
