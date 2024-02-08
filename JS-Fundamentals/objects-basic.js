//! Objects

// As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

// In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// let user = new Object(); // "object constructor" syntax

// let user = {}; // "object literal" syntax

//* Literals and properties

// We can immediately put some properties into {...} as “key: value” pairs:

// let user = {
// an object
//   name: "Tokhir", // by key "name" store value "Tokhir"
//   age: 24, // by key "age" store value 24
// };

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "Tokhir".
// The second one has the name "age" and the value 24.

// We can add, remove and read files from it at any time.

//? Property values are accessible using the dot notation:

// get property values of the object:
// console.log(user.name); // Tokhir
// console.log(user.age); // 24

// The value can be of any type. Let’s add a boolean one:

// user.isAdmin = true;

// console.log(user); // {name: "Tokhir", age: 24, isAdmin: true}

//? To remove a property, we can use the delete operator:

// delete user.age;

// console.log(user); // {name: "Tokhir", isAdmin: true}

//? We can also use multiword property names, but then they must be quoted:

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true, // multiword property name must be quoted
// };

//* Square brackets

// For multiword properties, the dot access doesn’t work:

// this would give a syntax error
// user.likes birds = true

// JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.

// There’s an alternative “square bracket notation” that works with any string:

// let user = {};

// set
// user["likes birds"] = true;

// get
// console.log(user["likes birds"]); // true

// delete
// delete user["likes birds"];

// console.log(user); // {}

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

// let key = "likes birds";

// same as user["likes birds"] = true;
// user[key] = true;

// console.log(user);

//? Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

// For instance:

// let user = {
//   name: "John",
//   age: 30,
// };

// let key = prompt("What do you want to know about the user?", "name");

// console.log(user[key]); // John (if enter "name")

//? The dot notation cannot be used in a similar way:

let user = {
  name: "John",
  age: 30,
};

let key = "name";
alert(user.key); // undefined

