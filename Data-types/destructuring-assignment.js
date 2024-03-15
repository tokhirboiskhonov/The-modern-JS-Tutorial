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

//* Object destructuring

// The destructuring assignment also works with objects.

// The basic syntax is:

//? let {var1, var2} = {var1:…, var2:…}

// We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.

// For instance:

let options = {
  titles: "Menu",
  width: 100,
  height: 200,
};

let { titles, width, height } = options;

console.log(titles); // Menu
console.log(width); // 100
console.log(height); // 200

// Properties options.titles, options.width and options.height are assigned to the corresponding variables.

// The order does not matter. This works too:

// changed the order in let {...}
let { height2, width2, title2 } = { title: "Menu", height: 200, width: 100 };

// The pattern on the left side may be more complex and specify the mapping between properties and variables.

// If we want to assign a property to a variable with another name, for instance, make options.width go into the variable named w, then we can set the variable name using a colon:

let options1 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// { sourceProperty: targetVariable }
let { width: w, height: h, titlea } = options1;

// width -> w
// height -> h
// title -> title

console.log(titlea); // Menu
console.log(w); // 100
console.log(h); // 200

// The colon shows “what : goes where”. In the example above the property width goes to w, property height goes to h, and title is assigned to the same name.

// For potentially missing properties we can set default values using "=", like this:

let options2 = {
  title: "Menu",
};

let { width3 = 100, height3 = 200, title3 } = options2;

console.log(title3); // Menu
console.log(width3); // 100
console.log(height3); // 200

// Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.

// In the code below prompt asks for width, but not for title:

let option3 = {
  title: "Menu",
};

let { width4 = prompt("width?"), title4 = prompt("title?") } = options3;

console.log(title4); // Menu
console.log(width4); // (whatever the result of prompt is)

// We also can combine both the colon and equality:

let options4 = {
  title: "Menu",
};

let { width: w1 = 100, height: h1 = 200, title5 } = options4;

console.log(titl5); // Menu
console.log(w1); // 100
console.log(h1); // 200

// If we have a complex object with many properties, we can extract only what we need:

let options5 = {
  title: "Menu",
  width: 100,
  height: 200,
};

// only extract title as a variable
let { title6 } = options5;

console.log(title6); // Menu

//* The rest pattern "..."

// What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

// We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.

// It looks like this:

let options6 = {
  title: "Menu",
  height: 200,
  width: 100,
};

// title = property named title
// rest = object with the rest of properties
let { titleObj, ...restObject } = options6;

// now titleObj="Menu", restObject={height: 200, width: 100}
console.log(restObject.height); // 200
console.log(restObject.width); // 100

