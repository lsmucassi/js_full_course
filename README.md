# Full Javascript Course

#### 1. What is Javascript
###### 1.1 JavaScript
Often abbreviated as JS, is a programming language that conforms to the **ECMAScript** specification. JavaScript is high-level, often just-in-time compiled(Javascript uses the JIT compiler), and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.

As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). However, the language itself does not include any input/output (I/O), such as networking, storage, or graphics facilities, as the host environment (usually a web browser) provides those APIs.

JavaScript engines were originally used only in web browsers, but they are now embedded in some servers, usually via Node.js. They are also embedded in a variety of applications created with frameworks such as Electron and Cordova.

Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.
> source: wikipedia

###### 1.2 JIT Compiler
In computing, just-in-time (JIT) compilation (also dynamic translation or run-time compilations) is a way of executing computer code that involves compilation during execution of a program – at run time – rather than before execution. Most often, this consists of source code or more commonly bytecode translation to machine code, which is then executed directly. A system implementing a JIT compiler typically continuously analyses the code being executed and identifies parts of the code where the speedup gained from compilation or recompilation would outweigh the overhead of compiling that code.

JIT compilation is a combination of the two traditional approaches to translation to machine code – ahead-of-time compilation (AOT), and interpretation – and combines some advantages and drawbacks of both. Roughly, JIT compilation combines the speed of compiled code with the flexibility of interpretation, with the overhead of an interpreter and the additional overhead of compiling (not just interpreting). JIT compilation is a form of dynamic compilation, and allows adaptive optimization such as dynamic recompilation and microarchitecture-specific speedups. Interpretation and JIT compilation are particularly suited for dynamic programming languages, as the runtime system can handle late-bound data types and enforce security guarantees.
> source: wikipedia

###### 1.3 History Of JS
**Creation at Netscape**
The Mosaic web browser was released in 1993. As the first browser with a graphical user interface accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web. The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. Navigator quickly became the most used browser.

During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.

Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages. Although the new language and its interpreter implementation were officially called LiveScript when first shipped as part of a Navigator release in September 1995, the name was changed to JavaScript three months later.

The choice of the JavaScript name has caused confusion, sometimes giving the impression that it is a spin-off of Java. Since Java was the hot new programming language at the time, this has been characterized as a marketing ploy by Netscape to give its own new language cachet.

**Adoption by Microsoft**
Microsoft debuted Internet Explorer in 1995, leading to a browser war with Netscape. On the JavaScript front, Microsoft reverse-engineered the Navigator interpreter to create its own, called JScript.

JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator. These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.

**The rise of JScript**
In November 1996, Netscape submitted JavaScript to ECMA International, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.

The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.

Meanwhile, Microsoft gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%. This meant that JScript became the de facto standard for client-side scripting on the Web.

Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on ECMA work. Thus ECMAScript 4 was mothballed.

**Growth and standardization**
During the period of Internet Explorer dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, Mozilla, released the Firefox browser. Firefox was well-received by many, taking significant market share from Internet Explorer.

In 2005, Mozilla joined ECMA International, and work started on the ECMAScript for XML (E4X) standard. This led to Mozilla working jointly with Macromedia (later acquired by Adobe Systems), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the Tamarin implementation as an open source project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from Microsoft, ECMAScript 4 never reached fruition.

Meanwhile, very important developments were occurring in open-source communities not affiliated with ECMA work. In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and described a set of technologies, of which JavaScript was the backbone, to create web applications where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new libraries were created, including jQuery, Prototype, Dojo Toolkit, and MooTools.

Google debuted its Chrome browser in 2008, with the V8 JavaScript engine that was faster than its competition. The key innovation was just-in-time compilation (JIT), so other browser vendors needed to overhaul their engines for JIT.

In July 2008, these disparate parties came together for a conference in Oslo. This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.

**Reaching maturity**
Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of ECMAScript 6 in 2015.

From 2016 to 2019, a new version of the ECMAScript standard was published each year, but the scope of changes was much smaller than the 5th or 6th editions. Thus JavaScript can now be considered a mature language that has largely settled down.

The current JavaScript ecosystem has many libraries and frameworks, established programming practices, and increased usage of JavaScript outside of web browsers. Plus, with the rise of single-page applications and other JavaScript-heavy websites, a number of transpilers have been created to aid the development process.

**Trademark**
"JavaScript" is a trademark of Oracle Corporation in the United States. It is used under license for technology invented and implemented by Netscape Communications and other parties.

Website client-side usage
JavaScript is the dominant client-side scripting language of the Web, with 95% of websites using it for this purpose. Scripts are embedded in or included from HTML documents and interact with the DOM. All major web browsers have a built-in JavaScript engine that executes the code on the user's device.
> source: wikipedia

#### 2. Hello World
###### 2.1 Javascript on the web console
Use any web browser to access the web console, you can write javascript code on a console found on developer tools that most browsers ships with. By pressing F12 while a tab is opened, you will have access to developer tools, then look for 'console' on the top tabs of the developer tools. This can be achieved by right clicking on a page(empty or not) then choose 'inspect'

You can run functions like 'clear()', 'console.log('Hello World')' on the console and many other javascript functions or code.

###### 2.1 Javascript on a script tag
Javascript can also be written on a HTML file by using the '\<script\>' tag, write your code of choice inside the tag. However the results of the output from running js this way can be debugged by using the console utility mentioned above.

###### 2.3 Javascript on a text editor
Alternatively you can write javascript on a file with the extension '.js', this is the recommended way to write javascript code. The code from a javascript file can be linked to a HTML file using the '\<script\>' tag as before but this time you reference the file using a path.

The script tag can be used in the head part of the html or in the body, depending on when you want your code to load. Include it in the head if you want it to be rendered on load and include it in the body if you want it to load after everything.

###### 2.3 Javascript commenting style
use /* */ for multiple lines.
e.g: 

`/* many
    many 
    many
    lines */
`

and // for single lines.

`
// One line
`

#### 3. Variables
To store data in a memory location we use variables, this also helps us keep track of our data as we initialize, collect, process and output it to understand and work better with our programs

- In JS variables are declared using var keyword
syntax:
`
var variableNmae = data;
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

#### 4. Conditional Statements
Conditional statements are used to perform different actions based on different conditions.

Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use switch to specify many alternative blocks of code to be executed

###### The if Statement
Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
Syntax:
`
if (condition) {
  //  block of code to be executed if the condition is true
}
`

###### The else Statement
Use the else statement to specify a block of code to be executed if the condition is false.
Syntax:
`
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
`

###### The else if Statement
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
###### The switch statement 
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
  document.write(x + "<br >");
}
`
Looping over a String
Example
`
var txt = "JavaScript";
var x;

for (x of txt) {
  document.write(x + "<br >");
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

#### 7. VariablesHoisting & Stop