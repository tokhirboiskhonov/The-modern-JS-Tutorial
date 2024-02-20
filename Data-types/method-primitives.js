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

