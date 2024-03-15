//*  Date and time

// Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.

// For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

//* Creation

// To create a new Date object call new Date() with one of the following arguments:

//! new Date()

// Without arguments – create a Date object for the current date and time:

let now = new Date();
console.log(now); // shows current date/time

//! new Date(milliseconds)

// Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

// It’s a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method (see below).

// Dates before 01.01.1970 have negative timestamps, e.g.:

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

