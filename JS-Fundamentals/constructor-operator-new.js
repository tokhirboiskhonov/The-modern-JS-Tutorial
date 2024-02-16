//* Constructor, operator "new"

// The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

//* Constructor function

// Constructor functions technically are regular functions. There are two conventions though:

// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator.

// For instance:

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

//! When a function is executed with new, it does the following steps:

//? 1. A new empty object is created and assigned to this.
//? 2. The function body executes. Usually it modifies this, adds new properties to it.
//? 3. The value of this is returned.
// In other words, new User(...) does something like:

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// So let user = new User("Jack") gives the same result as:

let user = {
  name: "Jack",
  isAdmin: false,
};

// Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. Much shorter than using literals every time, and also easy to read.
//! That’s the main purpose of constructors – to implement reusable object creation code.

//* new function() { … }

// If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

// create a function and immediately call it with new
let user1 = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();

// This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

//* Constructor mode test: new.target

// Inside a function, we can check whether it was called with new or without it, using a special new.target property.

// It is undefined for regular calls and equals the function if called with new:

// function User() {
//   console.log(new.target);
// }

// User(); // undefined

// new User(); // function User{...}

// That can be used inside the function to know whether it was called with new, “in constructor mode”, or without it, “in regular mode”.

// We can also make both new and regular calls to do the same, like this:

function User(name) {
  if (!new.target) {
    return new User(name);
  }

  this.name = name;
}

let john = new User("John");

console.log(john);

// This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without new, and it still works.

// Probably not a good thing to use everywhere though, because omitting new makes it a bit less obvious what’s going on. With new we all know that the new object is being created.

//* Return from consturctors

// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

//? 1. If return is called with an object, then the object is returned instead of this.
//? 2. If return is called with a primitive, it’s ignored.

// In other words, return with an object returns that object, in all other cases this is returned.

//! For instance, here return overrides this by returning an object:

function BigUser() {
  this.name = "John";

  return {
    name: "Smith", // <--returns this object
  };
}

console.log(new BigUser().name); // Smith, got that object

//! And here’s an example with an empty return (or we could place a primitive after it, doesn’t matter):

function SmallUser() {
  this.name = "Tokhirkhuja";

  return; // <-- return this
}

console.log(new SmallUser().name); // Tokhirkhuja

// Usually constructors don’t have a return statement. Here we mention the special behavior with returning objects mainly for the sake of completeness.

