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

