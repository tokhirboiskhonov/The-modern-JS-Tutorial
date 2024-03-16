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
  console.log(`${key}:${value}`); // name:John, then age:30
}

// The similar code for a Map is simpler, as it’s iterable:

let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user2) {
  console.log(`${key}:${value}`); // name:John, then age:30
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

let [name3, name4, ...title1] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
// now title1 = ["Consul", "of the Roman Republic"]

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

console.log(title5); // Menu
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

//! Gotcha if there’s no let

// In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.

//? This will not work:

// let title, width, height;

// error in this line
// {title, width, height} = {title: "Menu", width: 200, height: 100};

// The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:

// {
//   // a code block
//   let message = "Hello";
//   // ...
//   console.log(message);
// }

// So here JavaScript assumes that we have a code block, that’s why there’s an error. We want destructuring instead.

// To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):

let titleNew, widthNew, heightNew;

// okay now
({ titleNew, widthNew, heightNew } = {
  title: "Menu",
  width: 200,
  height: 100,
});

console.log(titleNew); // Menu

//* Nested destructuring

// If an object or an array contains other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

// In the code below options has another object in the property size and an array in the property items. The pattern on the left side of the assignment has the same structure to extract values from them:

let obj = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: { width: wid, height: heigh },
  items: [item1, item2],
  title: head = "Menu",
} = obj;

console.log(wid); // 100
console.log(heigh); // 200
console.log(item1); // Cake
console.log(item2); // Donut
console.log(head); // Menu

// Finally, we have width, height, item1, item2 and title from the default value.

// Note that there are no variables for size and items, as we take their content instead.

//* Smart function parameters

// There are times when a function has many parameters, most of which are optional. That’s especially true for user interfaces. Imagine a function that creates a menu. It may have a width, a height, a title, items list and so on.

// Here’s a bad way to write such a function:

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}

// In real-life, the problem is how to remember the order of arguments. Usually IDEs try to help us, especially if the code is well-documented, but still… Another problem is how to call a function when most parameters are ok by default.

// Like this?

// undefined where default values are fine
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

//! That’s ugly. And becomes unreadable when we deal with more parameters.
//? Destructuring comes to the rescue!

// We can pass parameters as an object, and the function immediately destructurizes them into variables:

// we pass object to function
let objOptions = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(`${title} ${width} ${height}`); // My Menu 200 100
  console.log(items); // Item1, Item2
}

showMenu(objOptions);

// We can also use more complex destructuring with nested objects and colon mappings:

let objOptions1 = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

function showMenu({
  title: t = "Untitled", // title goes to t
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2], // items first element goes to item1, second to item2
}) {
  console.log(`${t} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(objOptions1);

//! The full syntax is the same as for a destructuring assignment:

// function({
// 	incomingProperty: varName = defaultValue
// 	...
//  })

// Then, for an object of parameters, there will be a variable varName for property incomingProperty, with defaultValue by default.

// Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object:

showMenu({}); // ok, all values are default

showMenu(); // this would give an error

// We can fix this by making {} the default value for the whole object of parameters:

function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  console.log(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200

// In the code above, the whole arguments object is {} by default, so there’s always something to destructurize.

//* Summary

// Destructuring assignment allows for instantly mapping an object or array onto many variables.

//? The full object syntax:

//? let {prop : varName = default, ...rest} = object

// This means that property prop should go into the variable varName and, if no such property exists, then the default value should be used.

// Object properties that have no mapping are copied to the rest object.

//? The full array syntax:

//? let [item1 = default, item2, ...rest] = array

// The first item goes to item1; the second goes into item2, all the rest makes the array rest.

// It’s possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one.

//* Tasks

//! 1. Destructuring assignment

let objUser = {
  name: "John",
  years: 30,
};

({ name, years, isAdmin = false } = objUser);

console.log(name); // John
console.log(years); // 30
console.log(isAdmin); // false

//! 2. The maximal salary

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

console.log(topSalary(salaries));
