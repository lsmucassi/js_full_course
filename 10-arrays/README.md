# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language

### 10. Arrays
An array is a data type that allows you to store many items in a variable, in javascript an arrays can store items of different data types.
Arrays stores items in a row with no keys, just the values.
Example:

`
var cars = ["Saab", "Volvo", "BMW"];
`

Using arrays is applicable mostly where you have a lot of variable holding the same type and the same kind of data, like variables for all student names in a classroom, if you have two students then that would be easy to work with but imagine a classroom with 100 students, that will require 100 variables of type string,

**Declaring Arrays** 
Example:
Variables

`
var student_one = "Linda";
var student_two = "Sibusiso";
...
var student_n = "nth students";
`

arrays

`
var student_list = ["Linda", "Sibusiso", ... , "nth students"];
`

Arrays are written with square brackets., array items are separated by commas.
Arrays are very helpful especially when you have to populate them using an external data source like a file or database, and they also make it easier work with a lot of data.

Arrays can be written in multiple lines of code:

`
var student_list = [
    "Linda",
    "Sibusiso",
    ... ,
    "nth students"
    ];
`

Arrays in javascript can be created in this way too:

`
var student_list = new Array("Linda", "Sibusiso", ... , "nth students");
`

The two ways of creating arrays are the same and returns a variable of the same type, however for simplicity the first way is preferred.

**Accessing Arrays**
Array's items are '0' indexed, meaning the first item is an index 0,

`
[3,5,6,7,1,3,4,5,8] // an arrays of random numbers
[0,1,2,3,4,5,6,7,8] // index matching items
`

So to access an item in an arrays we can use it's index, and with indexing in place we can 'ask' the array what value in at a certain index.
Using the name of the arrays and appending square brackets at the end of the name and using an index number inside those square brackets we can access the array.

Example:

`
var student_list = ["Linda", "Sibusiso", "Nelisiwe" , "Themba"];
console.log(student_list[2]); // returns the name 'Nelisiwe' 
`

By just calling the array name without square brackets we can display all items in the array

Example:

`
console.log(student_list); // returns all the items' 
`

**Changing items in an Array**
> Note we can change the value of items in an arrays but we can not change the index value, we can however add items to an Array and reduce an array

We can change an item of an array using the item's index

Example:

`
var student_list = ["Linda", "Sibusiso", "Nelisiwe" , "Themba"];
student_list[1] = "Sakhile";
console.log(student_list[1]); // returns the name 'Sakhile' 
`

**Arrays vs Objects**
Arrays are a special type of objects(use the typeof function to check), with many differences to an typical object, arrays uses numbers(indexes) to access it's elements while an object uses names to access it's elements.

Example:

`
// an object
var person = {name: "Linda", surname: "Mucassi", job: "developer"};

// an array
var students = ["Linda", "Sibusiso", "Nelisiwe" , "Themba"];

person.name; // this is the name "Linda" from the object
students[3]; // this is the name "Themba" from the array
`

Array items can be objects
Example:

`
dateArray[0] = Date.now(); // Date.now() is an object
MyArray[1] = myFunction;
MyArray[4] = MyClass;
`

**Adding items**
There are many functions used with arrays to allow us to do things to arrays, push() is one function we can use to add items to an array

Example:

`
var students = ["Linda", "Sibusiso", "Nelisiwe" , "Themba"];
students.push("Sanele"); // adds the item Sanele as the last element of the array
`

> note that with push elements are added at the end of the array and the size of the array changes

You can add as many items as you like 

Example:

`
students.push(item1, item2, ..., nthItem);
`

To add an item at the start of an array we can use a function called unshift()

Example:

`
students.unshift(item1, item2, ..., nthItem);
`

There are many other functions that javascript has prepared for us to use from the go such as:

sort() - To sort an array in ascending order by default
splice - To add or remove element ata specific position in an array
toString - Converts an array to a string

Just to mention a few.