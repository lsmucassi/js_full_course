/*
Conditional statements are used to perform different actions based on different conditions.

Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.
*/

// IF STATEMENT
var time = new Date().getHours();
if (time < 20) {
  document.getElementById("if-statement").innerHTML = "Good day";
}

//IF ELSE STATEMENT
var time = new Date().getHours();
if (time < 20) {
  document.getElementById("if-statement").innerHTML = "Good day! 🌞";
} else {
    document.getElementById("if-statement").innerHTML = "I hope it is morning, so good morning, if not then good night";
}

//IF ELSE IF STATEMENT 
var time = new Date().getHours();
if (time < 20) {
  document.getElementById("if-statement").innerHTML = "Good day! 🌞";
} else if (time > 20) {
    document.getElementById("if-statement").innerHTML = " good night";
}

//IF ELSE IF ELSE STATEMENT
var time = new Date().getHours();
if (time < 20) {
  document.getElementById("if-statement").innerHTML = "Good day";
} else if (time > 20) {
    document.getElementById("if-statement").innerHTML = " good night";
} else {
    document.getElementById("if-statement").innerHTML = "I hope it is morning, so good morning! 😜";
}

// SWITCH STATEMENT
var text;
var num = 2;

switch(num) {
  case 1:
    text = "Fist Option";
    break;
  case 2:
    text = "Second Option";
    break;
  case 3:
    text = "Third Option";
    break;
  default:
    text = "Default Option...";
}
document.getElementById("switch").innerHTML = text;