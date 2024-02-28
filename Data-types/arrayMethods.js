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

