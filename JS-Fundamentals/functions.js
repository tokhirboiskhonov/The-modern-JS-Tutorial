//! Functions

// Quite often we need to perform a similar action in many places of the script.

// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

//* Function Declaration

// To create a function we can use a function declaration

// It looks like this:

// function showMessage() {
//   console.log("Hello everyone!");
// }

// function name(parameter1, parameter2, ...parameterN) {
//body
// }

// Our new function can be called by its name: showMessage().

// For instance:

// function showMessage() {
//   console.log("Hello everyone!");
// }

// showMessage();
// showMessage();

// The call showMessage() executes the code of the function. Here we will see the message two times.

// This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.

// If we ever need to change the message or the way it is shown, it’s enough to modify the code in one place: the function which outputs it.

//* Local variables

// A variable declared inside a function is only visible inside that function.

// For example:

// function showMessage() {
//   let message = "Hello, I'm Tokhir";
//   console.log(message);
// }

// showMessage(); // Hello, I'm Tokhir

// alert(message); // <-- Error! The variable is local to the function

//* Outer variables

// A function can access an outer variable as well, for example:

// let userName = "Tokhir";

// function showMessage() {
//   let message = `Hello ${userName}!`;
//   console.log(message);
// }

// showMessage(); // Hello Tokhir!

// The function has full access to the outer variable. It can modify it as well.

// let userName = "John";

// function showMessage() {
//   userName = "Steve";
//   let message = `Hello ${userName}`;
//   alert(message);
// }

// alert(userName);

// showMessage();

// alert(userName);

//? The outer variable is only used if there’s no local one.

// If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

let userName = "John";

function showMessage() {
  let userName = "Bob";
  let message = `Hello ${userName}`;
  console.log(message);
}

console.log(userName);

showMessage();

console.log(userName);

//* Global variables

// Variables declared outside of any function, such as the outer userName in the code above, are called global.

// Global variables are visible from any function (unless shadowed by locals).

// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

//* Parameters

// We can pass arbitary data to a functions using parameters.

// In the example below, the function has two parameters: from and text.

// function showMessage(from, text) {
// parameters: from, text
//   console.log(`${from}: ${text}`);
// }

// showMessage("Ann", "Hello!"); // Ann: Hello! (*)
// showMessage("Ann", "What's up?"); // Ann: What's up? (**)

// When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them.

// Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function showMessage(from, text) {
  from = `*${from}*`; //make "from" look nicer

  console.log(`${from}: ${text}`);
}

let from = "Ann";

showMessage(from, "Hello"); // output: *Ann*: Hello

console.log(from);

//* Default values

function showMessage(from, text = "no text given.") {
  console.log(`${from}: ${text}`);
}

// showMessage("Ann"); //output: Ann: no text given.
showMessage("Ann", "Hello!"); //output: Ann: Hello!
// showMessage("Ann", undefined); //output: Ann: no text given.

function showMessage(from, text = anotherFunc()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text

  console.log(`${from}: ${text}`);
}

function anotherFunc() {
  return "Hello everyone!";
}

showMessage("Tokhir");

//? Evaluation of default parameters
// In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter.
// In the example above, anotherFunction() isn’t called at all, if the text parameter is provided.
// On the other hand, it’s independently called every time when text is missing.

//! Default parameters in old JavaScript code

// Several years ago, JavaScript didn’t support the syntax for default parameters. So people used other ways to specify them.

// Nowadays, we can come across them in old scripts.

//? For example, an explicit check for undefined:

function showMessage(from, text) {
  if (text === undefined) {
    text = "no text given";
  }

  console.log(from + ": " + text);
}

showMessage("Anna"); // output: Anna: no text given
showMessage("Anna", "Hello everyone!"); // output: Anna: Hello everyone!

//? …Or using the || operator:

function showMessage(from, text) {
  text = text || "no text given";

  console.log(`${from}: ${text}`);
}

showMessage("Maxim"); //output: Maxim: no text given

showMessage("Maxim", "Hi there!"); //output: Maxim: Hi there!

//? …Nullish coalescing operator using the ??:

function showCount(count) {
  //if count is undefined or null, show "uknown"

  console.log(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); //unknown

//* Returing a value

// A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(3, 4);

// console.log(result);

// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to result above).
// There may be many occurrences of return in a single function. For instance:

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Do you have permission from your parents?");
//   }
// }

// function showMovie(age) {
//   if (!checkAge(age)) {
//     return;
//   }

//   alert("Showing you the movie"); // (*)
// }

// let age = +prompt("How old are you?", 18);

// if (checkAge(age)) {
//   alert("Access granted!");
// } else {
//   alert("Access denied.");
// }

// showMovie();

//! A function with an empty return or without it returns undefined

//? If a function does not return a value, it is the same as if it returns undefined:

// function doNothing() {
/* empty */
// }

// alert(doNothing() === undefined); // true

//? An empty return is also the same as return undefined:

// function doNothing() {
//   return;
// }

// alert(doNothing() === undefined); // true

//* Naming a function

// Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

// It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

// For instance, functions that start with "show" usually show something.

// Function starting with…

//? "get…" – return a value,
//? "calc…" – calculate something,
//? "create…" – create something,
//? "check…" – check something and return a boolean, etc.

// Examples of such names:

//? showMessage(..)     // shows a message
//? getAge(..)          // returns the age (gets it somehow)
//? calcSum(..)         // calculates a sum and returns the result
//? createForm(..)      // creates a form (and usually returns it)
//? checkPermission(..) // checks a permission, returns true/false

//* Summary for FD(function decalration).

// A function declaration looks like this:

// function name(parameters, delimited, by, comma) {
/* code */
//  }

//? 1. Values passed to a function as parameters are copied to its local variables.
//? 2. A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
//? 3. A function can return a value. If it doesn’t, then its result is undefined.

// To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

// It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

//! Function naming:

//? 1. A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
//? 2. A function is an action, so function names are usually verbal.
//? 3. There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.

// Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.

//* Tasks

//! 1. Is "else" required?

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }

//   let isAllow = confirm("Did parents allow you?");
//   console.log(isAllow);
// }

// checkAge(17);

//! 2. Rewrite the function using '?' or '||'

// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Did parents allow you?");
// }

//! 3. Function min(a, b)

function min(a, b) {
  return a < b ? a : b;
}

min(2, 5);

//! 4. Function pow(a, b)

function pow(a, b) {
  return a ** b;
}

console.log(pow(10, 2)); // 100

//* Function expression

// Syntax:

// let sayHi = function () {
//   console.log("Hello!");
// };

// sayHi();

//* Function is a value

// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

// We can even print out that value using alert:

// function sayHi() {
//   alert("Hello");
// }

// alert(sayHi); // shows the function code

// Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

// Surely, a function is a special value, in the sense that we can call it like sayHi().

// But it’s still a value. So we can work with it like with other kinds of values.

// We can copy a function to another variable:

// function sayHi() {
//   console.log("Hello!");
// }

// let func = sayHi;

// func();
// sayHi();

//* Callback functions

//? 1

// function ask(question, yes, no) {
//   confirm(question) ? yes() : no();
// }

// function showOK() {
//   alert("You agreed!");
// }

// function showCancel() {
//   alert("You canceled the execution.");
// }

// ask("Do you agree?", showOK, showCancel);

//? 2

// function ask(question, agree, disagree) {
//   confirm(question) ? agree() : disagree();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed!");
//   },
//   function () {
//     alert("You disagreed!");
//   }
// );

//! A function is a value representing an “action”

//? 1. Regular values like strings or numbers represent the data.

//? 2. A function can be perceived as an action.

//? 3. We can pass it between variables and run when we want.

//* Function Expression vs Function Declaration

//? While we use function expression, we can't invoke the function before the itself.

// sum(1, 3); // Uncaught ReferenceError: Cannot access 'sum' before initialization

// let sum = function (a, b) {
//   console.log(a + b);
// };

// sum(1, 3);

//! Another special feature of Function Declarations is their block scope.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

// If we use Function Declaration, it won’t work as intended:

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    alert("Hello!");
  }
} else {
  function welcome() {
    alert("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined

// That’s because a Function Declaration is only visible inside the code block in which it resides.

let age1 = prompt("What is your age?", 18);

let welcome1;

if (age1 < 18) {
  welcome1 = function () {
    alert("Hello!");
  };
} else {
  welcome1 = function () {
    alert("Greetings!");
  };
}

welcome1();

// Or we could simplify it even further using a question mark operator ?:

let age2 = prompt("What is your age?", 18);

let welcome2 =
  age2 < 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };

welcome2(); // ok now

//* Summary for FE (function expression)

// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.
// In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

// So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.

//* Arrow functions, the basics.

// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called “arrow functions”, because it looks like this:

// let func = (arg1, arg2, ..., argN) => expression;

// Let's see a concrete example:

let sum = (a, b) => a + b;

console.log(sum(2, 10));

// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

//? 1. If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

// For example:

let double = (n) => n * 2;
console.log(double(10));

//? 2. If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => console.log("Hello!");

sayHi();

// Arrow functions can be used in the same way as Function Expressions.

// For instance, to dynamically create a function:

let yourAge = +prompt("What's your age?", 18);

let yourWelcome =
  age < 18 ? () => console.log("Hello!") : () => console.log("Greetings!");

yourWelcome();

