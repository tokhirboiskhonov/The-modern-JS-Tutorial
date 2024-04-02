//* The old "var"

//! This article is for understanding old scripts

// The information in this article is useful for understanding old scripts.

// That’s not how we write new code.

// In the very first chapter about variables, we mentioned three ways of variable declaration:

//? let
//? const
//? var

// The var declaration is similar to let. Most of the time we can replace let by var or vice-versa and expect things to work:

var message = "Hi";
alert(message); // Hi

// But internally var is a very different beast, that originates from very old times. It’s generally not used in modern scripts, but still lurks in the old ones.

// If you don’t plan on meeting such scripts you may even skip this chapter or postpone it.

// On the other hand, it’s important to understand differences when migrating old scripts from var to let, to avoid odd errors.

//* “var” has no block scope

// Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.

// For instance:

if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

// As var ignores code blocks, we’ve got a global variable test.

// If we used let test instead of var test, then the variable would only be visible inside if:

if (true) {
  let test = true; // use "let"
}

alert(test); // ReferenceError: test is not defined

// The same thing for loops: var cannot be block- or loop-local:

for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}

alert(i); // 10, "i" is visible after loop, it's a global variable
alert(one); // 1, "one" is visible after loop, it's a global variable

// If a code block is inside a function, then var becomes a function-level variable:

function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // works
}

sayHi();
alert(phrase); // ReferenceError: phrase is not defined

// As we can see, var pierces through if, for or other code blocks. That’s because a long time ago in JavaScript, blocks had no Lexical Environments, and var is a remnant of that.

//* “var” tolerates redeclarations

// If we declare the same variable with let twice in the same scope, that’s an error:

let userLet1;
let userLet2; // SyntaxError: 'userLet' has already been declared

// With var, we can redeclare a variable any number of times. If we use var with an already-declared variable, it’s just ignored:

var user2 = "Pete";

var user2 = "John"; // this "var" does nothing (already declared)
// ...it doesn't trigger an error

alert(user2); // John

