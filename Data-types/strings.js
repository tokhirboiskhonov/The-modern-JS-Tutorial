//* Strings

// In JavaScript, the textual data is stored as strings. There is no separate type for a single character.

// The internal format for strings is always UTF-16, it is not tied to the page encoding.

//* Quotes

// Let’s recall the kinds of quotes.

// Strings can be enclosed within either single quotes, double quotes or backticks:

let single = "single-quoted";
let double = "double-quoted";

let backticks = `backticks`;

// Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Another advantage of using backticks is that they allow a string to span multiple lines:

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// Looks natural, right? But single or double quotes do not work this way.

// If we use them and try to use multiple lines, there’ll be an error:

// // let guestList = "Guests: // Error: Unexpected token ILLEGAL
// //   * John";

// Single and double quotes come from ancient times of language creation, when the need for multiline strings was not taken into account. Backticks appeared much later and thus are more versatile.
