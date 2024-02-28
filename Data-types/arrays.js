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

//* Methods pop/push, shift/unshift

// A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:

//? 1. push appends an element to the end.
//? 2. shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// Arrays support both operations.

// In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

// There’s another use case for arrays – the data structure named stack.

// It supports two operations:

//? 1. push adds an element to the end.
//? 2. pop takes an element from the end.

// So new elements are added or taken always from the “end”.

//! Methods that work with the end of the array:

//* pop

let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.pop()); // remove "Pear" and alert it

alert(fruits); // Apple, Orange

// Both fruits.pop() and fruits.at(-1) return the last element of the array, but fruits.pop() also modifies the array by removing it.

//* push

// Append the element to the end of the array:

let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert(fruits); // Apple, Orange, Pear

// The call fruits.push(...) is equal to fruits[fruits.length] = ....

//! Methods that work with the beginning of the array:

//* shift

// Extracts the first element of the array and returns it:

let fruits = ["Apple", "Orange", "Pear"];

alert(fruits.shift()); // remove Apple and alert it

alert(fruits); // Orange, Pear

//* unshift

// Add the element to the beginning of the array:

let fruits = ["Orange", "Pear"];

fruits.unshift("Apple");

alert(fruits); // Apple, Orange, Pear

//! Methods push and unshift can add multiple elements at once:

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert(fruits);

//* Internals

// An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

// They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.

// Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.

let fruits = ["Banana"];

let arr3 = fruits; // copy by reference (two variables reference the same array)

alert(arr3 === fruits); // true

arr3.push("Pear"); // modify the array by reference

alert(fruits); // Banana, Pear - 2 items now

// …But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast.

// But they all break if we quit working with an array as with an “ordered collection” and start working with it as if it were a regular object.

// For instance, technically we can do this:

let fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

fruits.age = 25; // create a property with an arbitrary name

// That’s possible, because arrays are objects at their base. We can add any properties to them.

// But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

//! The ways to misuse an array:

//? 1. Add a non-numeric property like arr.test = 5.
//? 2. Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
//? 3. Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// Please think of arrays as special structures to work with the ordered data. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way. And if you need arbitrary keys, chances are high that you actually require a regular object {}.

//* Loops

// One of the oldest ways to cycle array items is the for loop over indexes:

let arr4 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr4.length; i++) {
  alert(arr4[i]);
}

// But for arrays there is another form of loop, for..of:

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log(fruit); // Apple Orange Plum
}

// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

// Technically, because arrays are objects, it is also possible to use for..in:

let arr5 = ["Apple", "Orange", "Pear"];

for (let key in arr5) {
  alert(arr5[key]); // Apple, Orange, Pear
}

// But that’s actually a bad idea. There are potential problems with it:

// 1. The loop for..in iterates over all properties, not only the numeric ones.

// There are so-called “array-like” objects in the browser and in other environments, that look like arrays. That is, they have length and indexes properties, but they may also have other non-numeric properties and methods, which we usually don’t need. The for..in loop will list them though. So if we need to work with array-like objects, then these “extra” properties can become a problem.

// 2. The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

//! Generally, we shouldn’t use for..in for arrays.

