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

//* Computed properties

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
//
// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// console.log(bag.apple); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

// So, if a visitor enters "apple", bag will become {apple: 5}.

// Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// We can use more complex expressions inside square brackets:

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// }

// Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.
// So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

//* Property value shorthand

// In real code, we often use existing variables as values for property names.

// function makeUser(name, age) {
//   return {
//  name: name,
//  age: age,
// ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

// Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

let obj = makeUser("Tokhirkhuja", 24);
console.log(obj.name); // Tokhirkhuja

//* Property names limitations

// As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

// But for an object property, there’s no such restriction:

// these properties are all right
let obj1 = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj1.for + obj1.let + obj1.return); // 6

// In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

// Other types are automatically converted to strings.

// For instance, a number 0 becomes a string "0" when used as a property key:

let obj2 = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj2["0"]); // test
console.log(obj2[0]); // test (same property)

// There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:

let obj3 = {};
obj3.__proto__ = 5; // assign a number
alert(obj3.__proto__); // [object Object] - the value is an object, didn't work as intended

//* Property existence test, “in” operator

// There’s also a special operator "in" for that.

// The syntax is:

// "key" in object

let myUser = { name: "John", age: 30 };

alert("age" in myUser); // true, myUser.age exists
alert("blabla" in myUser); // false, myUser.blabla doesn't exist

let user4 = { age: 30 };

let key2 = "age";
alert(key in user4); // true, property "age" exists

//* The "for..in" loop

// To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

// The syntax:

// for (key in object) {
// executes the body for each key among object properties
// }

let userA = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in userA) {
  // keys
  alert(key); // name, age, isAdmin
  // values for the keys
  alert(userA[key]); // John, 30, true
}

// Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

// Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used.

//* Ordered like an object

// Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

// As an example, let’s consider an object with the phone codes:

let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

//  The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first.

// But if we run the code, we see a totally different picture:

// USA (1) goes first
// then Switzerland (41) and so on.
// The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49.

