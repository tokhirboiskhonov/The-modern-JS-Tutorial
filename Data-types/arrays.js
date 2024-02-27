//* Arrays

// Objects allow you to store keyed collections of values. That’s fine.

// But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.

// It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can’t insert a new property “between” the existing ones. Objects are just not meant for such use.

// There exists a special data structure named Array, to store ordered collections.

//* Declaration

//! There are two syntaxes for creating an empty array:

let arr1 = new Array();

let arr2 = [];

// Almost all the time, the second syntax is used. We can supply initial elements in the brackets:

// let fruits = ["Apple", "Orange", "Plum"];

// Array elements are numbered, starting with zero.

// We can get an element by its number in square brackets:

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

// We can replace an element:

fruits[2] = "Pear";

console.log(fruits); // ['Apple', 'Orange', 'Pear']

// …Or add a new one to the array:

fruits[3] = "Lemon";

console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]

// The total count of the elements in the array is its length:

let newFruits = ["Apple", "Orange", "Plum"];

console.log(newFruits.length); // 3

// We can also use alert to show the whole array.

let fruits = ["Apple", "Orange", "Plum"];

alert(fruits); // Apple,Orange,Plum

// An array can store elements of any type.

// For instance:

// mix of values

let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

//! Trailing comma

// An array, just like an object, may end with a comma:

let fruits = ["Apple", "Orange", "Plum"];

// The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.

//* Get last elements with "at"

// Let’s say we want the last element of the array.

// Some programming languages allow the use of negative indexes for the same purpose, like fruits[-1].

// Although, in JavaScript it won’t work. The result will be undefined, because the index in square brackets is treated literally.

// We can explicitly calculate the last element index and then access it: fruits[fruits.length - 1].

let fruits = ["Apple", "Orange", "Plum"];

alert(fruits[fruits.length - 1]); // Plum

// A bit cumbersome, isn’t it? We need to write the variable name twice.

// Luckily, there’s a shorter syntax: fruits.at(-1):

let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert(fruits.at(-1)); // Plum

//! In other words, arr.at(i):

//? 1. is exactly the same as arr[i], if i >= 0.
//? 2. for negative values of i, it steps back from the end of the array.

