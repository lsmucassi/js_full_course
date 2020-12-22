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
