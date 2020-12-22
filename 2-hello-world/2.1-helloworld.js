// this is a one line comment

/*
This is a
multiple 
line comment */

// the function console.log() allow you to show things on the console of the browser

/* also by running:
node [name-of-file].js
on your terminal/console on the pc, you can 
run javascript files and the behaviour will
be more or less the same as the browser console */
console.log('From a .js file:[File] Hello, World!')

// use a new line for better readability
// \n is used for making new lines on the display terminal/console
console.log('\n');

/* 
the following is are DOM Style properties
that are used to modify the html content,
we will learn about the DOM later on so do not mind this,
but you can just browse it 
*/
// document.getElementsByTagName("h1")[0] - select content by using html tag 
// .style - specifies that you want to modify the style
// .style.[property] - the property you want to modify, color, size, alignment and more...
// setting the font size
document.getElementsByTagName("h1")[0].style.fontSize = "50px";
document.getElementsByTagName("h1")[0].style.textAlign = "center";
document.getElementsByTagName("h1")[0].style.color = "white";
document.body.style.backgroundColor = "grey";
