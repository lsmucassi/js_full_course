# Full Javascript Course
> My journey in learning javascript and it's amazing features, I realized that documenting information/knowledge helps stick it up the brain's memory and helps in polishing the language you are using to document, and helps improve communication skills as this requires writing skills that allows others to read and understand the context. Enjoy my version of the basics of Javascript Programming Language

### 9. Objects
Variables are containers that contains one value at a time, Objects are similar to variables but more powerful and a bit organised as they allow the storing of many values, to do this we use a concept called key: 'value', think of the object as a container of other variables.

Example:
A variable

`
var name = "Linda";
`

An object

`
var person = {name: "Linda", surname: "Mucassi", job: "developer"};
`

Spaces and line breaks are not important. An object definition can span multiple lines:

Example

`
var person = {
  name: "Linda",
  surname: "Mucassi",
  job: "developer"
};
`

**Accessing Object Properties**
You can access object properties in two ways:

`
objectName.propertyName
`

or

`
objectName["propertyName"]
`

Example:

`
person.name;
`
or

`
person["name"];
`

Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

`
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
`
