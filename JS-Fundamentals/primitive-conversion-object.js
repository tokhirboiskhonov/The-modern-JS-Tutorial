//* Object to primitive conversion

// What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?

// JavaScript doesn’t allow you to customize how operators work on objects. Unlike some other programming languages, such as Ruby or C++, we can’t implement a special object method to handle addition (or other operators).

// In case of such operations, objects are auto-converted to primitives, and then the operation is carried out over these primitives and results in a primitive value.

// That’s an important limitation: the result of obj1 + obj2 (or another math operation) can’t be another object!

// E.g. we can’t make objects representing vectors or matrices (or achievements or whatever), add them and expect a “summed” object as the result. Such architectural feats are automatically “off the board”.

// So, because we can’t technically do much here, there’s no maths with objects in real projects. When it happens, with rare exceptions, it’s because of a coding mistake.

// In this chapter we’ll cover how an object converts to primitive and how to customize it.

//? We have two purposes:

//! 1. It will allow us to understand what’s going on in case of coding mistakes, when such an operation happened accidentally.
//! 2. There are exceptions, where such operations are possible and look good. E.g. subtracting or comparing dates (Date objects). We’ll come across them later.

//* Conversion rules

// In the chapter Type Conversions we’ve seen the rules for numeric, string and boolean conversions of primitives. But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.

// 1. There’s no conversion to boolean. All objects are true in a boolean context, as simple as that. There exist only numeric and string conversions.
// 2. The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
// 3. As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.

// We can implement string and numeric conversion by ourselves, using special object methods.

// Now let’s get into technical details, because it’s the only way to cover the topic in-depth.

//* Hints

// How does JavaScript decide which conversion to apply?

// There are three variants of type conversion, that happen in various situations. They’re called “hints”, as described in the specification:

//! "string"

// For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like alert:

// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;

