# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language

### 8. Primitive Data Types
Data types that are known as primitive values in JavaScript are:
- numbers
- strings
- booleans
- null
- undefined

Non-primitive values are:
- Objects
- functions
- arrays
> Non-primitive values are mutable data types. The value of an object can be changed after it gets created.

avaScript variables can hold many data types: numbers, strings, objects and more:

`
var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object
`

In programming, data types are an important concept.
To be able to operate on variables, it is important to know something about the type they are.

Without the concept of data types a computer would find it hard to computer some commands/code, like:

`
return 43 + "Bottle";
`

A computer wouldn't know how to solve this, but:


`
return "43" + "Bottle";
`

would make sense as both values are not string.
In some instance, because of the nature of Javascript some mixing of data types would make sense and in some it wouldn't
Take for example you want to add a string "2" to a number 2, this would result to "22" which is arithmetically incorrect, but adding a code to a letter to describe it would make sense like: "BMW M" + 4 which results into BMW M4, my favorite BMW Model.

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

Example:

`
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
`

**Strings**
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:
Example

`
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes
`

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
Example

`
var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
`

**Numbers**
JavaScript has only one type of numbers.

Numbers can be written with, or without decimals:
Example

`
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
`

Extra large or extra small numbers can be written with scientific (exponential) notation:

`
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
`

**Booleans**
Booleans can only have two values: true or false.
Example

`
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
`

**Arrays**
JavaScript arrays are written with square brackets.

Array items are separated by commas.
The following code declares (creates) an array called cars, containing three items (car names):
Example

`
var cars = ["Saab", "Volvo", "BMW"];
`

**Objects**
JavaScript objects are written with curly braces {}.
Object properties are written as name:value pairs, separated by commas.
Example

`
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
`

**Undefined**
Undefined
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
Example

`
var car;    // Value is undefined, type is undefined
`

Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

`
car = undefined;    // Value is undefined, type is undefined
`

An empty value has nothing to do with undefined.
An empty string has both a legal value and a type.

`
var car = "";    // The value is "", the typeof is "string"
`

**Null**
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
Unfortunately, in JavaScript, the data type of null is an object.
You can consider it a bug in JavaScript that typeof null is an object. It should be null.
You can empty an object by setting it to null,
You can also empty an object by setting it to undefined

`
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object
`