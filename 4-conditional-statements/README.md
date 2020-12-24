# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language


### 4. Conditional Statements
Conditional statements are used to perform different actions based on different conditions.

Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed

##### The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
Syntax:

`
if (condition) {
  //  block of code to be executed if the condition is true
}
`

##### The else Statement
Use the else statement to specify a block of code to be executed if the condition is false.
Syntax:

`
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
`

##### The else if Statement
Use the else if statement to specify a new condition if the first condition is false.
Syntax:

`
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
`

##### The switch statement 
The switch statement is used to perform different actions based on different conditions.
Use the switch statement to select one of many code blocks to be executed.

This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

Syntax

`switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
`