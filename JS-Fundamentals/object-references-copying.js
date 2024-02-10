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

//* Comparison by reference

// Two objects are equal only if they are the same object.
// For instance, here a and b reference the same object, thus they are equal:

let a = {};

let b = a;

console.log(a == b); // true
console.log(a === b); // true

// And here two independent objects are not equal, even though they look alike (both are empty):

let c = {};
let d = {}; // two independent objects

console.log(c == d); // false
console.log(c === d); // false

// Const objects can be modified

// An important side effect of storing objects as references is that an object declared as const can be modified.

const user1 = {
  name: "John",
};

user1.name = "Pete";

console.log(user1.name);

//* Cloning and merging, Object.assign

// So, copying an object variable creates one more reference to the same object.

// But what if we need to duplicate an object?

// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

let myUser = {
  name: "Tokhir",
  age: 24,
  isMarried: false,
  job: "Frontend developer",
};

let clone = {};

for (let key in myUser) {
  clone[key] = myUser[key];
}

clone.name = "Khusan";
clone.age = 26;
clone.isMarried = true;
clone.job = "Unemployement";

console.log(myUser);

