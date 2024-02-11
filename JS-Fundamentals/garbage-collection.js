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

