//* Destructuring assignment

// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.

// Arrays allow us to gather data items into an ordered list.

// However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we’ll see that.

//* Array destructuring

// Here's an example of how an array is destructured into variables:

let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, lastName] = arr;

console.log(firstName); //John
console.log(lastName); //Smith

// Now we can work with variables instead of array members.

// It looks great when combined with split or other array-returning methods:

let [currentName, surname] = "John Smith".split(" ");

console.log(currentName); // John
console.log(surname); // Smith

// As you can see, the syntax is simple. There are several peculiar details though. Let’s see more examples to understand it better.

//! “Destructuring” does not mean “destructive”.

// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. However, the array itself is not modified.

// It’s just a shorter way to write:

// let [firstName, surname] = arr;
let ism = arr[0];
let familiya = arr[1];

//! Ignore elements using commas

// Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
let [birinchiIsm, , title] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(title); // Consul

// In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items are also skipped (as there are no variables for them).

//! Works with any iterable on the right-side

// …Actually, we can use it with any iterable, not only arrays:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// That works, because internally a destructuring assignment works by iterating over the right value. It’s a kind of syntax sugar for calling for..of over the value to the right of = and assigning the values.

//! Assign to anything at the left-side

// We can use any “assignables” on the left side.

// For instance, an object property:

let user = {};

[user.name, user.surname] = "John Smith".split(" ");

console.log(user.name);
console.log(user.surname);

//! Looping with .entries()

// We can use it with destructuring to loop over the keys-and-values of an object:

let user1 = {
  name: "John",
  age: 30,
};

// loop over the keys-and-values
for (let [key, value] of Object.entries(user1)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// The similar code for a Map is simpler, as it’s iterable:

let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user2) {
  alert(`${key}:${value}`); // name:John, then age:30
}

//! Swap variables trick

// There’s a well-known trick for swapping values of two variables using a destructuring assignment:

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// Here we create a temporary array of two variables and immediately destructure it in swapped order.

// We can swap more than two variables this way.

//* The rest '...'

// Usually, if the array is longer than the list at the left, the “extra” items are omitted.

// For example, here only two items are taken, and the rest is just ignored:

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere

// If we’d like also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

let [名字1, 名字2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(名字1); //Julius

// rest is an array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// The value of rest is the array of the remaining array elements.

// We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.

let [name3, name4, ...titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
// now titles = ["Consul", "of the Roman Republic"]

//* Default values

// If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:

let [firstName1, surname1] = [];

console.log(firstName1); // undefined
console.log(surname1); // undefined

// If we want a “default” value to replace the missing one, we can provide it using =:

// default values
let [name5 = "Guest", surname2 = "Anonymous"] = ["Julius"];

console.log(name5); // Julius (from array)
console.log(surname2); // Anonymous (default used)

// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.

// For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
let [name = prompt("name?"), surname3 = prompt("surname?")] = ["Julius"];

console.log(name); // Julius (from array)
console.log(surname3); // whatever prompt gets

//? Please note: the prompt will run only for the missing value (surname).
