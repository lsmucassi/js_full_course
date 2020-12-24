# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language

### 1. What is Javascript

### 2. Hello World

### 3. Variables


### 4. Conditional Statements

#### 5. Loops
Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:
Instead of writing:

`
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
`

You can write:

`
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
`

##### Different Kinds of Loops
JavaScript supports different kinds of loops:

- for - loops through a block of code a number of times
- for/in - loops through the properties of an object
- for/of - loops through the values of an iterable object
- while - loops through a block of code while a specified condition is true
- do/while - also loops through a block of code while a specified condition is true

###### The For Loop
The for loop has the following syntax:

`
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
`

- Statement 1 is executed (one time) before the execution of the code block.
- Statement 2 defines the condition for executing the code block.
- Statement 3 is executed (every time) after the code block has been executed.

Example

`
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
`

From the example above, you can read:

- Statement 1 sets a variable before the loop starts (var i = 0).
- Statement 2 defines the condition for the loop to run (i must be less than 5).
- Statement 3 increases a value (i++) each time the code block in the loop has been executed.

**Statement 1**
Normally you will use statement 1 to initialize the variable used in the loop (i = 0).
This is not always the case, JavaScript doesn't care. Statement 1 is optional.
You can initiate many values in statement 1 (separated by comma):

Example

`
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
`

And you can omit statement 1 (like when your values are set before the loop starts):

Example

`
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
`

**Statement 2**
Often statement 2 is used to evaluate the condition of the initial variable.
This is not always the case, JavaScript doesn't care. Statement 2 is also optional.
If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.
> If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapter of this tutorial.

**Statement 3**
Often statement 3 increments the value of the initial variable.
This is not always the case, JavaScript doesn't care, and statement 3 is optional.
Statement 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
Statement 3 can also be omitted (like when you increment your values inside the loop):

Example

`
var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
`

###### The For/In Loop
The JavaScript for/in statement loops through the properties of an object:

Example

`
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
`

###### The For/Of Loop
The JavaScript for/of statement loops through the values of an iterable objects.

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
The for/of loop has the following syntax:

`
for (variable of iterable) {
  // code block to be executed
}
`

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
iterable - An object that has iterable properties.

Looping over an Array
Example

`
var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  document.write(x + "<\br>");
}
`

Looping over a String
Example

`
var txt = "JavaScript";
var x;

for (x of txt) {
  document.write(x + "<\br>");
}
`

###### The While Loop
Loops can execute a block of code as long as a specified condition is true.
The while loop loops through a block of code as long as a specified condition is true.

Syntax

`
while (condition) {
  // code block to be executed
}
`

Example
In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

Example

`
while (i < 10) {
  text += "The number is " + i;
  i++;
}
`

> If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

###### The Do/While Loop
The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax:

`
do {
  // code block to be executed
  }
while (condition);
`

Example
The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

Example

`
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
`

#### 6. Operators
In Javascript we have these types of operators:
- Assignment
- Unary
- Arithmetic
- Relational
- Logical 
- Bitwise
- Ternary


###### Assignment**
The assignment operator (=) assigns a value to a variable.

`
var x = 10;
`

###### JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic operations on numbers:

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

**Addition**
The addition operator (+) adds numbers:

`
var x = 5;
var y = 2;
var z = x + y;
`

**Subtraction**
The Subtraction operator (-) subtracts numbers:

`
var x = 5;
var y = 2;
var z = x - y;
`

**Multiplication**
The multiplication operator (*) multiplies numbers.

`
var x = 5;
var y = 2;
var z = x * y;
`

**Exponentiation**
The Exponentiation operator (**) allows for Exponentiation of numbers.

`
var x = 5;
var y = 2;
var z = x ** y;
`

**Division**
The Division operator (/) divides numbers.

`
var x = 5;
var y = 2;
var z = x / y;
`

**Modulus Division**
The Modulus Division operator (%) return the remainder between number's division.

`
var x = 5;
var y = 2;
var z = x / y;
`

**Unary Operators**
- **Increment**
The Increment operator (++) increments a numbers with a value of 1.

we have two types of increments
- - Prefix Increment

`
// adds a value before the variable is executed
var x = 5;
++x;
`

- - Postfix Increment

`
// adds a value after the variable is executed
var x = 5;
x++;
`

- **Decrement**
The Decrement operator (++) increments a numbers with a value of 1.

we have two types of increments
- - Prefix Increment

`
// Subtracts a value of 1 before the variable is executed
var x = 5;
--x;
`

- - Postfix decrement

`
// subtracts a value 0f 1 after the variable is executed
var x = 5;
x--;
`

##### JavaScript Relational/Logical Operators
###### Comparison Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values.

**Equal to : ==**	

`
x = 5
x == 8 //	false	
x == 5	//true	
x == "5" //	true
`

**Equal value and equal type : ===**

`
x = 5
x === 5	// true	
x === "5"	// false
`

**Not equal to : !=**	

`
x = 5
x != 8	// true
`

**Not equal value or not equal type : !==**

`
x = 5
x !== 5	// false	
x !== "5"	// true	
x !== 8	// true
,

**Greater than	: >** 

`
x = 5
x > 8	// false
`

**Less than : <**

`
x = 5
x < 8	// true
`

**Greater than or equal to : >=**	

`
x = 5
x >= 8	false
`

**Less than or equal : <=**

`
x = 5
x <= 8	true
`

###### Logical Operators
Logical operators are used to determine the logic between variables or values.

**And	: &&**

`
x = 5
y = 2
(x < 10 && y > 1) // true
`

**Or : ||**

`
(x == 4 || y == 5) // false
`

**Not	: !**

`
!(x == y) // true
`

###### Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

Syntax:

`
variablename = (condition) ? value1:value2 
`

Example:

`
var voteable = (age < 18) ? "Too young":"Old enough";
`
> The above ternary statement is also similar to an if statement, but can only be used instead of an 'if' statement if the body of the 'if' statement has one line after the condition only in one line and one line only

###### JavaScript Bitwise Operators
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

- &	[AND] -	Sets each bit to 1 if both bits are 1
- |	[OR]	- Sets each bit to 1 if one of two bits is 1
- ^	[XOR]	- Sets each bit to 1 if only one of two bits is 1
- ~	[NOT]	- Inverts all the bits
- <<	[Zero fill left shift] -	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
- \>>	[Signed right shift	Shifts] - right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
- \>>>	[Zero fill right shift] -	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

**Bitwise AND - &**
When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
One bit example:

`
0 & 0 // 0
1 & 1 // 1
`

**Bitwise OR - |**
When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1:
One bit example:

`
0 | 0 // 0
1 | 1 // 1
`

**Bitwise XOR - ^**
When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:
One bit example:

`
0 ^ 0 // 0
1 ^ 1 // 0
`

**Bitwise NOT - ~**
When a bitwise NOT is performed on bits, it inverts all the bits:
bit example:

`
5	// 00000000000000000000000000000101
~5	// 11111111111111111111111111111010 (-6)
`

**(Zero Fill) Bitwise Left Shift - <<**
This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

`
5	// 00000000000000000000000000000101
5 << 1	// 00000000000000000000000000001010 (10)
`

**(Sign Preserving) Bitwise Right Shift - >>**
This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:

`
-5 //	11111111111111111111111111111011
-5 >> 1	 // 11111111111111111111111111111101 (-3)
`

**(Zero Fill) Right Shift - >>>**
This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

`
5	// 00000000000000000000000000000101
5 >>> 1 //	00000000000000000000000000000010 (2)
`

**Converting Decimal to Binary**
Example

`
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
`

**Converting Binary to Decimal**
Example

`
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
`

#### 7. Variables Hoisting & Stop