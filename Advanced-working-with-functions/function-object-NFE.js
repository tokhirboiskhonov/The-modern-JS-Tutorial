//* Function object, NFE

// As we already know, a function in JavaScript is a value.

// Every value in JavaScript has a type. What type is a function?

// In JavaScript, functions are objects.

// A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.

//* The “name” property

// Function objects contain some useable properties.

// For instance, a function’s name is accessible as the “name” property:

function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi

// What’s kind of funny, the name-assigning logic is smart. It also assigns the correct name to a function even if it’s created without one, and then immediately assigned:

let sayHi = function () {
  alert("Hi");
};

alert(sayHi.name); // sayHi (there's a name!)

// It also works if the assignment is done via a default value:

function f(sayHi = function () {}) {
  alert(sayHi.name); // sayHi (works!)
}

f();

// In the specification, this feature is called a “contextual name”. If the function does not provide one, then in an assignment it is figured out from the context.

// Object methods have names too:

let user = {
  sayHi() {
    // ...
  },

  sayBye: function () {
    // ...
  },
};

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// There’s no magic though. There are cases when there’s no way to figure out the right name. In that case, the name property is empty, like here:

// function created inside array
let arr = [function () {}];

alert(arr[0].name); // <empty string>
// the engine has no way to set up the right name, so there is none
// In practice, however, most functions do have a name.

//* The "length" property

// There is another built-in property “length” that returns the number of function parameters, for instance:

function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

// Here we can see that rest parameters are not counted.

// The length property is sometimes used for introspection in functions that operate on other functions.

// For instance, in the code below the ask function accepts a question to ask and an arbitrary number of handler functions to call.

// Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:

//? *A zero-argument function, which is only called when the user gives a positive answer.
//? *A function with arguments, which is called in either case and returns an answer.

// To call handler the right way, we examine the handler.length property.

// The idea is that we have a simple, no-arguments handler syntax for positive cases (most frequent variant), but are able to support universal handlers as well:

function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

// for positive answer, both handlers are called
// for negative answer, only the second one
ask(
  "Question?",
  () => alert("You said yes"),
  (result) => alert(result)
);

//  This is a particular case of so-called polymorphism – treating arguments differently depending on their type or, in our case depending on the length. The idea does have a use in JavaScript libraries.

//* Custom properties

// We can also add properties of our own.

// Here we add the counter property to track the total calls count:

function sayHi() {
  alert("Hi");

  // let's count how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert(`Called ${sayHi.counter} times`); // Called 2 times

//! A property is not a variable

// A property assigned to a function like sayHi.counter = 0 does not define a local variable counter inside it. In other words, a property counter and a variable let counter are two unrelated things.

// We can treat a function as an object, store properties in it, but that has no effect on its execution. Variables are not function properties and vice versa. These are just parallel worlds.

// Function properties can replace closures sometimes. For instance, we can rewrite the counter function example from the chapter Variable scope, closure to use a function property:

function makeCounter() {
  // instead of:
  // let count = 0

  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert(counter()); // 0
alert(counter()); // 1

// The count is now stored in the function directly, not in its outer Lexical Environment.

// Is it better or worse than using a closure?

// The main difference is that if the value of count lives in an outer variable, then external code is unable to access it. Only nested functions may modify it. And if it’s bound to a function, then such a thing is possible:

function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  return counter;
}

let counter1 = makeCounter();

counter1.count = 10;
console.log(counter1()); // 10

// So the choice of implementation depends on our aims.

