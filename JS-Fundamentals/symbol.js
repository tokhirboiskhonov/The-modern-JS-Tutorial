//* Symbol type

// By specification, only two primitive types may serve as object property keys:

// string type, or symbol type.

// Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// Until now we’ve been using only strings.

// Now let’s explore symbols, see what they can do for us.

//* Symbol

// A “symbol” represents a unique identifier.

// A value of this type can be created using Symbol():

// let id = Symbol();

// Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:

// id is a symbol with the description "id"

// let id = Symbol("id");

// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn’t affect anything.

// For instance, here are two symbols with the same description – they are not equal:

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// If you are familiar with Ruby or another language that also has some sort of “symbols” – please don’t be misguided. JavaScript symbols are different.

// So, to summarize, a symbol is a “primitive unique value” with an optional description. Let’s see where we can use them.

