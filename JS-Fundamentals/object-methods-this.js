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

