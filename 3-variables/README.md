# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language

### 3. Variables
Before 2015, using the var keyword was the only way to declare a JavaScript variable.

The 2015 version of JavaScript (ES6 - ECMAScript 2015) allows the use of the const keyword to define a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.

Because it is a little complicated to describe the difference between these keywords, and because they are not supported in older browsers, the first part of this tutorial will most often use var.

To store data in a memory location we use variables, this also helps us keep track of our data as we initialize, collect, process and output it to understand and work better with our programs

**JavaScript Data Types**
JavaScript variables can hold numbers like 100 and text values like "John Doe".
In programming, text values are called text strings.
Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

Example:

`
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
`

- In JS variables are declared using var, let and const keyword
syntax:

`
var variableName = data;
let variableName = data;
const VAT = 14.5;
`

- Variable names should begin with a letter, $ or a underscore, then any letter or combination may follow but not special characters
- variable names can not be the same as keywords or reserved word
- variable names are case sensitive in JS
e.g:
valid var name

`
var apple_code
var $apple_code
var CONSTANT
`

invalid var name

`
var 123apple
var *apple
var @apple
`

- It is recommended and it is a good practice to name your variable in a descriptive manner
e.g

` 
var temp //to store a temporally value
var count //to use as a counter
`