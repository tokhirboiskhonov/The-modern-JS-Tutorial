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

