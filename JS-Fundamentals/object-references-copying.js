//! Object references and copying

// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// That’s easy to understand if we look a bit under the hood of what happens when we copy a value.

// Let’s start with a primitive, such as a string.

// Here we put a copy of message into phrase:

let message = "Hello!";
let phrase = message;

// As a result we have two independent variables, each one storing the string "Hello!".

// Quite an obvious result, right?

// Objects are not like that.

//! A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// let user = {
//   name: "Tokhir",
//   age: 24,
// };

// let admin = user;

// console.log(admin);

// Now we have two variables, each storing a reference to the same object:

// As you can see, there’s still one object, but now with two variables that reference it.

// We can use either variable to access the object and modify its contents:

let user = { name: "John" };

let admin = user;

admin.name = "Smith";

console.log(user); // {name: "Smith"}

