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

