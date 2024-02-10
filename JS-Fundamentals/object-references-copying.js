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

//! We can also use the method Object.assign.

//? The syntax is:
// Object.assign(dest, ...sources)

//? The first argument dest is a target object.
//? Further arguments is a list of source objects.

// It copies the properties of all source objects into the target dest, and then returns it as the result.

// For example, we have user object, let’s add a couple of permissions to it:

let user2 = { name: "Johnibek" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

let newUser = Object.assign(user2, permissions1, permissions2);

console.log(newUser);

console.log(user2.name === newUser.name);

// If the copied property name already exists, it gets overwritten:

let obj = { name: "Abdusaid" };

Object.assign(obj, { name: "Jakhongir" });

console.log(obj.name);

//! We also can use Object.assign to perform a simple object cloning:

let object1 = {
  name: "Steve Jobs",
  age: 55,
};

let newObject1 = Object.assign({}, object1);

newObject1.name = "Bill Gates";

console.log(newObject1);
console.log(object1);

//* Nested cloning

// Until now we assumed that all properties of user are primitive. But properties can be references to other objects.

let newObj = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

alert(newObj.sizes.height); // 182

// Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes:

let user10 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user10);

alert(user10.sizes === clone.sizes); // true, same object

// user and clone share sizes
user10.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

// To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

//* StructuredClone

// The call structuredClone(object) clones the object with all nested properties.

// Here’s how we can use it in our example:

let newUser1 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(newUser1);

alert(newUser1.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
newUser1.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 50, not related

// The structuredClone method can clone most data types, such as objects, arrays, primitive values.

// It also supports circular references, when an object property references the object itself (directly or via a chain or references).

// For example:

let user0 = {};
// let's create a circular reference:
// user0.me references the user0 itself
user0.me = user0;

let clone = structuredClone(user0);
alert(clone.me === clone); // true

// As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.

// Although, there are cases when structuredClone fails.

// For instance, when an object has a function property:

// error
structuredClone({
  f: function () {},
});

// Function properties aren’t supported.

// To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

