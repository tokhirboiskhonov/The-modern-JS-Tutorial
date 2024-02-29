//* Array methods

//! splice

// How to delete an element from the array?

// The arrays are objects, so we can try to use delete:

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

console.log(arr[1]); // undefined

// now arr = ["I",  , "home"];
alert(arr.length); // 3

// The element was removed, but the array still has 3 elements, we can see that arr.length == 3.

// The syntax is:

//? arr.splice(start[, deleteCount, elem1, ..., elemN])

// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

// This method is easy to grasp by examples.

// Let’s start with the deletion:

let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1); // from index 1 remove 1 element

alert(arr1); // ["I", "JavaScript"]

// Easy, right? Starting from the index 1 it removed 1 element.

// In the next example we remove 3 elements and replace them with the other two:

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");

alert(arr2); // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements:

let arr3 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr3.splice(0, 2);

alert(removed); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that we need to set deleteCount to 0:

let arr4 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr4.splice(2, 0, "complex", "language");

alert(arr4); // "I", "study", "complex", "language", "JavaScript"

//! Negative indexes allowed

// Here and in other array methods, negative indexes are allowed. They specify the position from the end of the array, like here:

let arr5 = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr5.splice(-1, 0, 3, 4);

alert(arr5); // 1,2,3,4,5

//! slice

// The method arr.slice is much simpler than similar-looking arr.splice.

// The syntax is:

//? arr.slice([start], [end]);

// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

// It’s similar to a string method str.slice, but instead of substrings it makes subarrays.

// For instance:

let arr6 = ["t", "e", "s", "t"];

alert(arr6.slice(1, 3)); // e,s (copy from 1 to 3)

alert(arr6.slice(-2)); // s,t (copy from -2 till the end)

// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.

//! concat

// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The syntax is:

//? arr.concat(arg1, arg2...)

// It accepts any number of arguments – either arrays or values.

// The result is a new array containing items from arr, then arg1, arg2 etc.

// If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.

// For instance:

let arr7 = [1, 2];

// create an array from: arr and [3,4]
alert(arr7.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr7.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr7.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Normally, it only copies elements from arrays. Other objects, even if they look like arrays, are added as a whole:

let arr8 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

alert(arr8.concat(arrayLike)); // 1,2,[object Object]

// …But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

let arr9 = [1, 2];

let arrayLike1 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

alert(arr9.concat(arrayLike1)); // 1,2,something,else

//* Iterate: forEach

// The arr.forEach method allows to run a function for every element of the array.

// The syntax:

//? arr.forEach(function(item, index, array) {
// ... do something with item
// });

// For instance, this shows each element of the array:

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// And this code is more elaborate about their positions in the target array:

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// The result of the function (if it returns any) is thrown away and ignored.

//* Searching in array

// Now let's cover methods that search in an array

//* indexOf/lastIndexOf and includes

let arr10 = [1, 0, false];

console.log(arr10.indexOf(0)); // 1
console.log(arr10.indexOf(false)); // 2
console.log(arr10.indexOf(null)); // -1
console.log(arr10.includes(1)); // true

// Please note that indexOf uses the strict equality === for comparison. So, if we look for false, it finds exactly false and not the zero.

// The method arr.lastIndexOf is the same as indexOf, but looks for from right to left.

let fruits = ["Apple", "Orange", "Apple"];

alert(fruits.indexOf("Apple")); // 0 (first Apple)
alert(fruits.lastIndexOf("Apple")); // 2 (last Apple)

//! The includes method handles NaN correctly
// A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf:

const arr11 = [NaN];
alert(arr11.indexOf(NaN)); // -1 (wrong, should be 0)
alert(arr11.includes(NaN)); // true (correct)

// That’s because includes was added to JavaScript much later and uses the more up to date comparison algorithm internally.

//* find and findIndex/findLastIndex

// The syntax is:

// let result = arr.find(function(item, index, array) {
// if true is returned, item is returned and iteration is stopped
// for falsy scenario returns undefined
// });

// The function is called for elements of the array, one after another:

// 1. item is the element.
// 2. index is its index.
// 3. array is the array itself.

// If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

// For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

console.log(user.name); // John

// In real life arrays of objects is a common thing, so the find method is very useful.

//? The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

//? The arr.findLastIndex method is like findIndex, but searches from right to left, similar to lastIndexOf.

// Here’s an example:

let users1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the index of the first John
alert(users1.findIndex((user) => user.name == "John")); // 0

// Find the index of the last John
alert(users1.findLastIndex((user) => user.name == "John")); // 3

//! filter

// The find method looks for a single (first) element that makes the function return true.

// If there may be many, we can use arr.filter(fn).

// The syntax is similar to find, but filter returns an array of all matching elements:

let results = arr.filter(function (item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

// For instance:

let users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users2.filter((item) => item.id < 3);

alert(someUsers.length); // 2

//* Transform an array

// Let’s move on to methods that transform and reorder an array.

//! map

// The arr.map method is one of the most useful and often used.

// It calls the function for each element of the array and returns the array of results.

// The syntax is:

let result = arr.map(function (item, index, array) {
  // returns the new value instead of item
});

// For instance, here we transform each element into its length:

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6

//! sort(fn)

let arr12 = [1, 2, 15];

// the method reorders the content of arr
arr12.sort((a, b) => a - b);

console.log(arr12); // 1, 2, 15

//! localCompare()

let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => a.localeCompare(b)));

//! reverse()

// The method arr.reverse reverses the order of elements in arr.

let arr13 = [1, 2, 3, 4, 5];
arr13.reverse();

console.log(arr13); // 5,4,3,2,1

// It also returns the array arr after the reversal.

//! split and join

let names = "Bilbo, Gandalf, Nazgul";

let arr14 = names.split(", ");

for (let name of arr14) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

// The split method has an optional second numeric argument – a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:

let arr15 = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);

console.log(arr15); // Bilbo, Gandalf

//! Split into letters

// The call to split(s) with an empty s would split the string into an array of letters:

let str1 = "test";

alert(str1.split("")); // t,e,s,t

// The call arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.

// For instance:

let arr16 = ["Bilbo", "Gandalf", "Nazgul"];

let str = arr16.join(";"); // glue the array into a string using ;

alert(str); // Bilbo;Gandalf;Nazgul

//! reduce/reduceRight

// When we need to iterate over an array – we can use forEach, for or for..of.

// When we need to iterate and return the data for each element – we can use map.

// The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

// The syntax is:

let value = arr.reduce(
  function (accumulator, item, index, array) {
    // ...
  },
  [initial]
);

// The function is applied to all array elements one after another and “carries on” its result to the next call.

//? Arguments:

// accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.

// As function is applied, the result of the previous function call is passed to the next one as the first argument.

// So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end it becomes the result of reduce.

// Sounds complicated?

// The easiest way to grasp that is by example.

// Here we get a sum of an array in one line:

let arr17 = [1, 2, 3, 4, 5];

let result1 = arr17.reduce((sum, current) => sum + current, 0);

console.log(result1); // 15

//? The function passed to reduce uses only 2 arguments, that’s typically enough.

//* Array.isArray()

// Arrays do not form a separate language type. They are based on objects.
// So typeof does not help to distinguish a plain object from an array:

console.log(typeof {}); // object
console.log(typeof []); // object (same)

// ...But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true

//* Most methods support “thisArg”

// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.

// That parameter is not explained in the sections above, because it’s rarely used. But for completeness we have to cover it.

// Here’s the full syntax of these methods:

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

// The value of thisArg parameter becomes this for func.
// For example, here we use a method of army object as a filter, and thisArg passes the context:

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users3 = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = users3.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.

// A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.

//* Summary

//! A cheat sheet of array methods:

//? To add/remove elements:

// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

//? To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.

//? To iterate over elements:

// forEach(func) – calls func for every element, does not return anything.

//? To transform the array:

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

