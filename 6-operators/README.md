# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language

### 6. Operators
In Javascript we have these types of operators:
- Assignment
- Unary
- Arithmetic
- Relational
- Logical 
- Bitwise
- Ternary


#### Assignment**
The assignment operator (=) assigns a value to a variable.

`
var x = 10;
`

#### JavaScript Arithmetic Operators
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


#### JavaScript Relational/Logical Operators
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

#### Logical Operators
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

#### Conditional (Ternary) Operator
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

#### JavaScript Bitwise Operators
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
