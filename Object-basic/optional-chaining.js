//* Optional chaining "?."

// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

//* The "non-existing property" problem

// If you’ve just started to read the tutorial and learn JavaScript, maybe the problem hasn’t touched you yet, but it’s quite common.

// As an example, let’s say we have user objects that hold the information about our users.

// Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.

// In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:

// let user = {}; // a user without "address" property

// console.log(user.address?.street);

// That’s the expected result. JavaScript works like this. As user.address is undefined, an attempt to get user.address.street fails with an error.

// In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).

//* Optional chaining

// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

// Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

//! In other words, value?.prop:
//? 1. works as value.prop, if value exists,
//? 2. otherwise (when value is undefined/null) it returns undefined.

// Here’s the safe way to access user.address.street using ?.:

let user = {}; // user has no address

console.log(user?.address?.street); // undefined

//! Don’t overuse the optional chaining

// We should use ?. only where it’s ok that something doesn’t exist.

// For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

// Then, if user happens to be undefined, we’ll see a programming error about it and fix it. Otherwise, if we overuse ?., coding errors can be silenced where not appropriate, and become more difficult to debug.

//! The variable before ?. must be declared

// If there’s no variable user at all, then user?.anything triggers an error:

// ReferenceError: user is not defined
// user?.address;
// The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

//* Short-circuiting

// As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

// So, if there are any further function calls or operations to the right of ?., they won’t be made.

// For instance:

let user2 = null;
let x = 0;

user2?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

//* Other variants: ?.() , ?.[]

// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

// For example, ?.() is used to call a function that may not exist.

// In the code below, some of our users have admin method, and some don’t:

let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens(no such method)

// Here, in both lines we first use the dot (userAdmin.admin) to get admin property, because we assume that the user object exists, so it’s safe read from it.

// Then ?.() checks the left part: if the admin function exists, then it runs (that’s so for userAdmin). Otherwise (for userGuest) the evaluation stops without errors.

// The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.

let key = "firstName";

let myUser1 = {
  firstName: "Jackson",
};

let myUser2 = null;

console.log(myUser1?.[key]); // Jackson
console.log(myUser2?.[key]); // undefined

// Also we can use ?. with delete:

delete myUser1?.firstName; // delete myUser.firstName if user exists

console.log(myUser1);

// We can use ?. for safe reading and deleting, but not writing
// The optional chaining ?. has no use on the left side of an assignment.

let myUser3 = null;

myUser3?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"

//* Summary

//! The optional chaining ?. syntax has three forms:

//? 1. obj?.prop – returns obj.prop if obj exists, otherwise undefined.
//? 2. obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
//? 3. obj.method?.() – calls obj.method() if obj.method exists, otherwise returns undefined.

// As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

// A chain of ?. allows to safely access nested properties.

// Still, we should apply ?. carefully, only where it’s acceptable, according to our code logic, that the left part doesn’t exist. So that it won’t hide programming errors from us, if they occur.