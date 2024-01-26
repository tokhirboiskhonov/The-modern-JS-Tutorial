// As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact with the user: alert, prompt and confirm.

// * Alert

// This one we’ve seen already. It shows a message and waits for the user to press “OK”.

alert("Hello");

// * Prompt

// The function prompt accepts two arguments:

// result = prompt(title, [default]);
let result = prompt("What's your name", "");
alert(result);

// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

// title
// The text to show the visitor.
// default
// An optional second parameter, the initial value for the input field.

let myAge = prompt("How old are you?", 100);

alert(`You are ${myAge} years old!`); // You are 100 years old!

// * Confirm
// The syntax:

// let myResult = confirm(question);

let isBoss = confirm("Are you the boss?");

alert(isBoss);

// ! Summary

// We covered 3 browser-specific functions to interact with visitors:

// ! alert
// shows a message.

// ! prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

// ! confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
