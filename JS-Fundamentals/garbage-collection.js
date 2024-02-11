//* Garbage collection
//! Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.
// What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?

//* Reachability

//! The main concept of memory management in JavaScript is reachability.

// Simply put, “reachable” values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

//! 1. There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

// For instance:

//? 1.1 The currently executing function, its local variables and parameters.
//? 1.2 Other functions on the current chain of nested calls, their local variables and parameters.
//? 1.3 Global variables.
//? 1.4 (there are some other, internal ones as well)
//? These values are called roots.

// ! 2. Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.

// For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.

// There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

//* A simple example

// Here's the simplest example:

//user has a reference to the object.

// let user = {
//   name: "John",
// };

// user = null; // this object becomes already unreachable object.

// console.log(user);

//* Two references

let user = {
  name: "Steve Jobs",
};

let admin = user;

user = null;

console.log(admin); // still have access
console.log(user); // already unreachable

// …Then the object is still reachable via admin global variable, so it must stay in memory. If we overwrite admin too, then it can be removed.

//* Interlinked objects

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "Jonh",
  },
  {
    name: "Ann",
  }
);

delete family.father;
delete family.mother.husband;

// It’s not enough to delete only one of these two references, because all objects would still be reachable.

// But if we delete both, then we can see that John has no incoming reference any more:

//* Unreachable island

family = null;

console.log(family);

//* Internal algorithms

// The basic garbage collection algorithm is called “mark-and-sweep”.

// The following “garbage collection” steps are regularly performed:

//? 1. The garbage collector takes roots and “marks” (remembers) them.
//? 2. Then it visits and “marks” all references from them.
//? 3. Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
//? 4. …And so on until every reachable (from the roots) references are visited.
//? 5. All objects except marked ones are removed.

