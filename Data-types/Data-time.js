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

//! new Date(datestring)

// If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse uses, we’ll cover it later.

let date = new Date("2017-01-26");
console.log(date);

// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

//! new Date(year, month, date, hours, minutes, seconds, ms)

// Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

//? The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
//? The month count starts with 0 (Jan), up to 11 (Dec).
//? The date parameter is actually the day of month, if absent then 1 is assumed.
//? If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

// For instance:

new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default

// The maximal precision is 1 ms (1/1000 sec):

let date1 = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date1); // 1.01.2011, 02:03:04.567

//* Access date components

// There are methods to access the year, month and so on from the Date object:

//? getFullYear()

// Get the year (4 digits)

//? getMonth()

// Get the month, from 0 to 11.

//? getDate()

// Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

//? getHours(), getMinutes(), getSeconds(), getMilliseconds()

// Get the corresponding time components.

//! Not getYear(), but getFullYear()
// Many JavaScript engines implement a non-standard method getYear(). This method is deprecated. It returns 2-digit year sometimes. Please never use it. There is getFullYear() for the year.

//! Additionally, we can get a day of week:

//? getDay()

// Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.

// All the methods above return the components relative to the local time zone.

// There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

// If your local time zone is shifted relative to UTC, then the code below shows different hours:

// current date
let date2 = new Date();

// the hour in your current time zone
console.log(date2.getHours());

// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date2.getUTCHours());

// Besides the given methods, there are two special ones that do not have a UTC-variant:

//? getTime()

// Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.

//? getTimezoneOffset()

// Returns the difference between UTC and the local time zone, in minutes:

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
console.log(new Date().getTimezoneOffset());

