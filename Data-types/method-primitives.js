//* Methods of primitives

// JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. We will study those soon, but first we’ll see how it works because, of course, primitives are not objects (and here we will make it even clearer).

// Let’s look at the key distinctions between primitives and objects.

//! A primitive

// 1. Is a value of a primitive type.
// 2. There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

//! An object
// 1. Is capable of storing multiple values as properties.
// 2. Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.

// One of the best things about objects is that we can store a function as one of its properties.

let john = {
  name: "John",
  sayHi() {
    console.log("Hi buddy!"); // Hi buddy!
  },
};

john.sayHi();

// So here we’ve made an object john with the method sayHi.

// Many built-in objects already exist, such as those that work with dates, errors, HTML elements, etc. They have different properties and methods.

// But, these features come with a cost!

// Objects are “heavier” than primitives. They require additional resources to support the internal machinery.

//* A primitive as an object

//! Here’s the paradox faced by the creator of JavaScript:

//? *There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
//? *Primitives must be as fast and lightweight as possible.

//! The solution looks a little bit awkward, but here it is:

//? * Primitives are still primitive. A single value, as desired.
//? * The language allows access to methods and properties of strings, numbers, booleans and symbols.
//? * In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

// The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Thus, they provide different sets of methods.

// For instance, there exists a string method str.toUpperCase() that returns a capitalized str.

// Here’s how it works:

let str = "hello";

console.log(str.toUpperCase()); // HELLO

let n = 1.23456;

console.log(n.toFixed()); // 1

