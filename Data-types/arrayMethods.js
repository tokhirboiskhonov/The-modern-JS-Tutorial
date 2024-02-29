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

