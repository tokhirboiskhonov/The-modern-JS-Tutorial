//* Iterables

// Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

// Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

// If an object isn’t technically an array, but represents a collection (list, set) of something, then for..of is a great syntax to loop over it, so let’s see how to make it work.

//* Symbol.iterator

// We can easily grasp the concept of iterables by making one of our own.

// For instance, we have an object that is not an array, but looks suitable for for..of.

// Like a range object that represents an interval of numbers:

// let range = {
//   from: 1,
//   to: 5,
// };

//! To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

//? 1. When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
//? 2. Onward, for..of works only with that returned object.
//? 3. When for..of wants the next value, it calls next() on that object.
//? 4. The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

// Here’s the full implementation for range with remarks:

// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// for (let num of range) {
//   console.log(num); // 1 2 3 4 5
// }

//! Please note the core feature of iterables: separation of concerns.

//? The range itself does not have the next() method.
//? Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.

// So, the iterator object is separate from the object it iterates over.

// Technically, we may merge them and use range itself as the iterator to make the code simpler.

// Like this:

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range) {
  console.log(num); // 1 2 3 4 5
}

// Now range[Symbol.iterator]() returns the range object itself: it has the necessary next() method and remembers the current iteration progress in this.current. Shorter? Yes. And	 sometimes that’s fine too.

// The downside is that now it’s impossible to have two for..of loops running over the object simultaneously: they’ll share the iteration state, because there’s only one iterator – the object itself. But two parallel for-ofs is a rare thing, even in async scenarios.

//! Infinite iterators

// Infinite iterators are also possible. For instance, the range becomes infinite for range.to = Infinity. Or we can make an iterable object that generates an infinite sequence of pseudorandom numbers. Also can be useful.

// There are no limitations on next, it can return more and more values, that’s normal.

// Of course, the for..of loop over such an iterable would be endless. But we can always stop it using break.

//* String is iterable

// Arrays and strings are most widely used built-in iterables.

// For a string, for..of loops over its characters:

for (let char of "test") {
  // triggers 4 times: once for each character
  console.log(char); // t, then e, then s, then t
}

// And it works correctly with surrogate pairs!

let str = "𝒳😂";
for (let char of str) {
  alert(char); // 𝒳, and then 😂
}

//* Calling an iterator explicitly

// For deeper understanding, let’s see how to use an iterator explicitly.

// We’ll iterate over a string in exactly the same way as for..of, but with direct calls. This code creates a string iterator and gets values from it “manually”:

let newStr = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = newStr[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

// That is rarely needed, but gives us more control over the process than for..of. For instance, we can split the iteration process: iterate a bit, then stop, do something else, and then resume later.

//* Iterables and array-likes

// Two official terms look similar, but are very different. Please make sure you understand them well to avoid the confusion.

//? Iterables are objects that implement the Symbol.iterator method, as described above.
//? Array-likes are objects that have indexes and length, so they look like arrays.

// When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes, or both.

// For instance, strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).

// But an iterable may be not array-like. And vice versa an array-like may be not iterable.

// For example, the range in the example above is iterable, but not array-like, because it does not have indexed properties and length.

// And here’s the object that is array-like, but not iterable:

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2,
// };

// Error (no Symbol.iterator)
// for(let item of arrayLike){}

// Both iterables and array-likes are usually not arrays, they don’t have push, pop etc. That’s rather inconvenient if we have such an object and want to work with it as with an array. E.g. we would like to work with range using array methods. How to achieve that?

//* Array.from

// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it. Then we can call array methods on it.

// For instance:

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)

// Array.from at the line (*) takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it.

// Here we use Array.from to turn a string into an array of characters:

let str1 = "𝒳😂";

// splits str into array of characters
let chars = Array.from(str1);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

// Same with loop

let str2 = "𝒳😂";

let chars1 = [];

for (let char of str2) {
  chars1.push(char);
}

console.log(chars1);

//* Summary

// Objects that can be used in for..of are called iterable.

//! Technically, iterables must implement the method named Symbol.iterator.
//? The result of obj[Symbol.iterator]() is called an iterator. It handles further iteration process.
//? An iterator must have the method named next() that returns an object {done: Boolean, value: any}, here done:true denotes the end of the iteration process, otherwise the value is the next value.

//! The Symbol.iterator method is called automatically by for..of, but we also can do it directly.

//! Built-in iterables like strings or arrays, also implement Symbol.iterator.

//! String iterator knows about surrogate pairs.

// Objects that have indexed properties and length are called array-like. Such objects may also have other properties and methods, but lack the built-in methods of arrays.

// If we look inside the specification – we’ll see that most built-in methods assume that they work with iterables or array-likes instead of “real” arrays, because that’s more abstract.

// Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, and we can then use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.
