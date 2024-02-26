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

//* Strings are immutable

// Strings can’t be changed in JavaScript. It is impossible to change a character.

// Let’s try it to show that it doesn’t work:

let newstr = "Hi";

newstr[0] = "h"; // error
alert(newstr[0]); // doesn't work

// The usual workaround is to create a whole new string and assign it to str instead of the old one.

// For instance:

let newString = "Hi";

newString = "h" + newString[1]; // replace the string

alert(newString); // hi

// In the following sections we’ll see more examples of this.

//* Changing the case

// Methods toLowerCase() and toUpperCase() change the case:

alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface

// Or, if we want a single character lowercased:

alert("Interface"[0].toLowerCase()); // 'i'

//* Searching for a substring

// There are multiple ways to look for a substring within a string.

//! str.indexOf

// The first method is str.indexOf(substr, pos).

// It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.

let firstStr = "Widget with id";

alert(firstStr.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
alert(firstStr.indexOf("widget")); // -1, not found, the search is case-sensitive

alert(firstStr.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

// The optional second parameter allows us to start searching from a given position.

// For instance, the first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:

let strIndexOf = "Widget with id";

alert(strIndexOf.indexOf("id", 2)); // 12

// If we’re interested in all occurrences, we can run indexOf in a loop. Every new call is made with the position after the previous match:

let str12 = "As sly as a fox, as strong as an ox";

let target = "as"; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str12.indexOf(target, pos);
  if (foundPos == -1) break;

  alert(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

// The same algorithm can be layed out shorter:

let str3 = "As sly as a fox, as strong as an ox";
let target3 = "as";

let pos3 = -1;
while ((pos3 = str3.indexOf(target3, pos3 + 1)) != -1) {
  alert(pos3);
}

//! str.lastIndexOf(substr, position)

// There is also a similar method str.lastIndexOf(substr, position) that searches from the end of a string to its beginning.

// It would list the occurrences in the reverse order.

// There is a slight inconvenience with indexOf in the if test. We can’t put it in the if like this:

let str5 = "Widget with id";

if (str5.indexOf("Widget")) {
  alert("We found it"); // doesn't work!
}

// The alert in the example above doesn’t show because str.indexOf("Widget") returns 0 (meaning that it found the match at the starting position). Right, but if considers 0 to be false.

// So, we should actually check for -1, like this:

let str6 = "Widget with id";

if (str6.indexOf("Widget") != -1) {
  alert("We found it"); // works now!
}

//! includes, startsWith, endsWith

// The more modern method str.includes(substr, pos) returns true/false depending on whether str contains substr within.

// It’s the right choice if we need to test for the match, but don’t need its position:

alert("Widget with id".includes("Widget")); // true

alert("Hello".includes("Bye")); // false

// The optional second argument of str.includes is the position to start searching from:

alert("Widget".includes("id")); // true

alert("Widget".includes("id", 3)); // false, from position 3 there is no "id"

// The methods str.startsWith and str.endsWith do exactly what they say:

alert("Widget".startsWith("Wid")); // true, "Widget" starts with "Wid"

alert("Widget".endsWith("get")); // true, "Widget" ends with "get"

