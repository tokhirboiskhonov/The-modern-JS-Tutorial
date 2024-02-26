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

//* Special characters

// It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break:

let guestList1 = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList1); // a multiline list of guests, same as above

// As a simpler example, these two lines are equal, just written differently:

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

//? There are other, less common special characters:

// \n	New line
// \r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
// \', \", \`	Quotes
// \\	Backslash
// \t	Tab
// \b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

// As you can see, all special characters start with a backslash character \. It is also called an “escape character”.

// Because it’s so special, if we need to show an actual backslash \ within the string, we need to double it:

alert(`The backslash: \\`); // The backslash: \

// So-called “escaped” quotes \', \", \` are used to insert a quote into the same-quoted string.

// For instance:

alert("I'm the Walrus!"); // I'm the Walrus!

// As you can see, we have to prepend the inner quote by the backslash \', because otherwise it would indicate the string end.

// Of course, only the quotes that are the same as the enclosing ones need to be escaped. So, as a more elegant solution, we could switch to double quotes or backticks instead:

alert("I'm the Walrus!"); // I'm the Walrus!

// Besides these special characters, there’s also a special notation for Unicode codes \u…, it’s rarely used and is covered in the optional chapter about Unicode.

//*  String length

// The length property has the string length

console.log("My\n".length);

console.log("Hello ".length); // this stirng's length is 6, because empty space also considered as one letter

// Note that \n is a single “special” character, so the length is indeed 3.

//! length is a property

// People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. That doesn’t work.

// Please note that str.length is a numeric property, not a function. There is no need to add parenthesis after it. Not .length(), but .length.

//* Accessing characters

// To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:

let str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.at(0)); // H

// the last character
console.log(str[str.length - 1]); // o
console.log(str.at(-1));

// As you can see, the .at(pos) method has a benefit of allowing negative position. If pos is negative, then it’s counted from the end of the string.

// So .at(-1) means the last character, and .at(-2) is the one before it, etc.

//! The square brackets always return undefined for negative indexes, for instance:

let myStr = `Hello`;

alert(myStr[-2]); // undefined
alert(myStr.at(-2)); // l

// We can also iterate over characters using for..of:

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

