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

console.log("As web developer as work".lastIndexOf("as")); // 17

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

//* Getting a substring

// There are 3 methods in JavaScript to get a substring: substring, substr and slice.

//! str.slice(start [, end])

// Returns the part of the string from start to (but not including) end.

// For instance:

let str7 = "stringify";
alert(str7.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
alert(str7.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

// If there is no second argument, then slice goes till the end of the string:

let str8 = "stringify";
alert(str8.slice(2)); // 'ringify', from the 2nd position till the end

// Negative values for start/end are also possible. They mean the position is counted from the string end:

let str9 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert(str9.slice(-4, -1)); // 'gif'

//! str.substring(start [, end])

// Returns the part of the string between start and end (not including end).

// This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).

// For instance:

let str10 = "stringify";

// these are same for substring
alert(str10.substring(2, 6)); // "ring"
alert(str10.substring(6, 2)); // "ring"

// ...but not for slice:
alert(str10.slice(2, 6)); // "ring" (the same)
alert(str10.slice(6, 2)); // "" (an empty string)

//? Negative arguments are (unlike slice) not supported, they are treated as 0.

//! str.substr(start [, length])

// Returns the part of the string from start, with the given length.

// In contrast with the previous methods, this one allows us to specify the length instead of the ending position:

let str11 = "stringify";
alert(str11.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

// The first argument may be negative, to count from the end:

let letstr = "stringify";
console.log(letstr.substr(-4, 2)); // 'gi', from the 4th position get 2 characters

//! trim()

let text = "            Hello           ";

console.log(text.length); // now length of text is 28, because of empty spaces in string.

// so we can use trim method for remove empty space in strings.

// For example:

console.log(text.trim()); // Hello, without any empty spaces

//! trimStart()

let textTrimStart = "             Hello          ";

console.log(textTrimStart.trimStart()); // Hello          ;


//* Comparing strings

// As we know from the chapter Comparisons, strings are compared character-by-character in alphabetical order.

// Although, there are some oddities.

//! 1. A lowercase letter is always greater than the uppercase:

alert("a" > "Z"); // true

//! 2. Letters with diacritical marks are “out of order”:

alert("Österreich" > "Zealand"); // true

// This may lead to strange results if we sort these country names. Usually people would expect Zealand to come after Österreich in the list.

// To understand what happens, we should be aware that strings in Javascript are encoded using UTF-16. That is: each character has a corresponding numeric code.

// There are special methods that allow to get the character for the code and back:

//! str.codePointAt(pos)
// Returns a decimal number representing the code for the character at position pos:

// different case letters have different codes
alert("Z".codePointAt(0)); // 90
alert("z".codePointAt(0)); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

//! String.fromCodePoint(code)

// Creates a character by its numeric code

alert(String.fromCodePoint(90)); // Z
alert(String.fromCodePoint(0x5a)); // Z (we can also use a hex value as an argument)

//* Correct comparisons

// The “right” algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.

// So, the browser needs to know the language to compare.

// Luckily, modern browsers support the internationalization standard ECMA-402.

// It provides a special method to compare strings in different languages, following their rules.

// The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

// 1. Returns a negative number if str is less than str2.
// 2. Returns a positive number if str is greater than str2.
// 3. Returns 0 if they are equivalent.

// For instance:

alert("Österreich".localeCompare("Zealand")); // -1

//* Summary

//? There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.

//? We can use special characters, such as a line break \n.

//? To get a character, use: [] or at method.

//? To get a substring, use: slice or substring.

//? To lowercase/uppercase a string, use: toLowerCase/toUpperCase.

//? To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.

//? To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.

// There are several other helpful methods in strings:

//? str.trim() – removes (“trims”) spaces from the beginning and end of the string.
//? str.repeat(n) – repeats the string n times.
//? …and more to be found in the manual.

// Strings also have methods for doing search/replace with regular expressions. But that’s big topic, so it’s explained in a separate tutorial section Regular expressions.

// Also, as of now it’s important to know that strings are based on Unicode encoding, and hence there’re issues with comparisons. There’s more about Unicode in the chapter Unicode, String internals.

//* Tasks

//! 1. Uppercase the first character

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

function ucFirst(str) {
  let newStr = str[0].toUpperCase();
  return (newStr += str.slice(1));
}

console.log(ucFirst("john"));

//! 2. Check for spam

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

console.log(checkSpam("buy VIAGRA now")); // true
console.log(checkSpam("free xxxxx")); // true
console.log(checkSpam("innocent rabbit")); // false

//! 3. Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
}

console.log(
  truncate("Hello everyone! How are you doing? How is your family?", 20)
);

//! 4. Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120")); // 120
console.log(extractCurrencyValue("$120") == 120); // true
