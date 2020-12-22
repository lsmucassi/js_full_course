/* 
- In JS variables are declared using var, let and const keyword
syntax:
*/

// the = sign is used to assign values to variables
var variableName = "String";
let letName = true;
const VAT = 14.5;
console.log('variable Name: ' + variableName);
console.log('let Name: ' + letName);
console.log('VAT: ' + VAT);
console.log('\n');

// with algebra, you can do arithmetic with JavaScript variables, using operators like = and +,-,/,*
var x = 5 + 2 - (3 * 4) / 5;
console.log('algebra (x): ' +x);
console.log('\n');

// You can also concatenate strings with the + sign
var full_name = "John" + " " + "Doe";
console.log('full name: ' +full_name);
console.log('\n');

// In javascript you can declare variables in this way
// one line, many variables
var person = "John Doe", carName = "Volvo", price = 200;
console.log('person: ' + person);
console.log('car name: ' + carName );
console.log('price: ' + price);
console.log('\n');

// You can also rewrite the above using multiple lines
var person1 = "Jane Doe",
carName1 = "Nissan",
price1 = 400;
console.log('person 1: ' + person1);
console.log('car name 1: ' + carName1);
console.log('price 1: ' + price1);
console.log('\n');

// If you re-declare a JavaScript variable, it will not lose its value.
// the variable person2 will still have the value of 'Mary Doe' after execution
var person2 = "Mary Doe";
var person2;
console.log('person 2: ' +person2);
console.log('\n');

// Try this for fun and see the output
var x = "5" + 2 + 3;
console.log('string + numbers (x): ' + x);
console.log('\n');
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

// now try this
var x = 2 + 3 + "5";
console.log('numbers + string: ' + x);
console.log('\n');


/*
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
`*/

/*Remember that JavaScript identifiers (names) must begin with:

    A letter (A-Z or a-z)
    A dollar sign ($)
    Or an underscore (_)

Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
Example */
var $$$ = "My Money is";
var _ = 2;
var $myMoney = 5;
var _total = $myMoney + _;
console.log("Dollar sign variable: " + $$$);
console.log("Underscore sign variable: " + _);
console.log("Dollar sign + letters variable: " + $myMoney);
console.log("Underscore + letter: %s $%i", $$$ , _total);
console.log(""); // console.log() prints a new line by default
console.log("\n"); // this will add two new lines therefore