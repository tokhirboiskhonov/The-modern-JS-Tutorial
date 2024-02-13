//* Object methods, "this"

// Objects are usually created to represent entities of the real world, like users, orders and so on:

// let user = {
//   name: "John",
//   age: 24,
// };

// And, in the real world, a user can act: select something from the shopping cart, login, logout etc.

// Actions are represented in JavaScript by functions in properties.

//* Methods examples

// For a start, let's teach the user to say hello:

// let user = {
//   name: "John",
//   age: 24,
// };

// user.sayHi = function () {
//   console.log("Hello!");
// };

// user.sayHi();

// Here we’ve just used a Function Expression to create a function and assign it to the property user.sayHi of the object.

// Then we can call it as user.sayHi(). The user can now speak!

// A function that is a property of an object is called its method.

// So, here we’ve got a method sayHi of the object user.

// Of course, we could use a pre-declared function as a method, like this:

let obj = {};

// first declare
function sayHi() {
  console.log("Hello everybody!");
}

obj.sayHi = sayHi;

obj.sayHi(); // Hello everybody!

//* Method shorthand

// There exists a shorter syntax for methods in an object literal:

// let user = {
//   sayHi: function () {
//     console.log("Hello!");
//   },
// };

//method shorthand looks better, right?

// user = {
//   sayHi() {
//     console.log("This version is shorthand!");
//   },
// };

// user.sayHi();

// As demonstrated, we can omit "function" and just write sayHi().

// To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases, the shorter syntax is preferred.

//* "this" in methods

// It’s common that an object method needs to access the information stored in the object to do its job.

// For instance, the code inside user.sayHi() may need the name of the user.

// To access the object, a method can use the this keyword.

// The value of this is the object “before dot”, the one used to call the method.

// For instance:

// let user = {
//   name: "John",
//   age: 24,
//   sayHi() {
//     // "this" is the "current object"
//     console.log(`My name is ${this.name}, I'm ${this.age} years old.`);
//   },
// };

// user.sayHi();

// Here during the execution of user.sayHi(), the value of this will be user.

// Technically, it’s also possible to access the object without this, by referencing it via the outer variable:

// let user1 = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(user1.name); // "user" instead of "this"
//   },
// };

// …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

// That's demonstrated below:

// let user2 = {
//   name: "John",
//   age: 30,
//   sayHi() {
//     console.log(user2.name); // leads to an error.
//   },
// };

// let admin = user2;

// user2 = null;

// admin.sayHi(); // TypeError: Cannot read properties of null (reading 'name')

//* "this" is not bound.

// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.

// There’s no syntax error in the following example:

function sayHi() {
  console.log(this.name);
}

// The value of this is evaluated during the run-time, depending on the context.

// For instance, here the same function is assigned to two different objects and has different “this” in the calls:

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (dot or square brackets access the method – doesn't matter)

// Calling without an object: this == undefined
// We can even call the function without an object at all:

// function sayHi() {
//   alert(this);
// }

// sayHi(); // undefined
// In this case this is undefined in strict mode. If we try to access this.name, there will be an error.

// In non-strict mode the value of this in such case will be the global object (window in a browser, we’ll get to it later in the chapter Global object). This is a historical behavior that "use strict" fixes.

// Usually such call is a programming error. If there’s this inside a function, it expects to be called in an object context.

//* Arrow functions have no "this"

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

// For instance, here arrow() uses this from the outer user.sayHi() method:

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Ilya

// That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context. Later in the chapter Arrow functions revisited we’ll go more deeply into arrow functions.

