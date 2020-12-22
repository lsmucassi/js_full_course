// The for loop
console.log('THE FOR-LOOP');
console.log('Option 1');
var i;
cars =['Nissan', 'Volvo', 'Ford', 'BMW', 'Honda']
for (i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log('\n');

// you can also write a for loop in this manner as explained in the README
console.log('Option 2');
var i = 0;
var len = cars.length;
for (; i < len; ) {
  console.log(cars[i]);
  i++;
}

// try this
console.log('Try This for fun')
console.table(cars);

// or
console.log('\n');
for (i = 0; i < cars.length; i++) {
  console.table(cars[i]);
}
console.log('\n');

// well moving on

// The For-In
console.log('THE FOR-IN');
var person = {fname:"John", lname:"Doe", age:25};

var x;
for (x in person) {
  console.log(person[x]);
}
console.log('\n');

// The For-Of
console.log('THE FOR-OF');
for (variable of cars) {
    console.log(variable);
}
console.log('\n');

console.log('THE WHILE LOOP');
while (i < 10) {
    console.log("The number is " + i);
    i++;
}
console.log('\n');
// if you are wondering where did we initialize i, then keep on wondering 😂

console.log('THE DO WHILE LOOP');
do {
    console.log("The number is " + i);
    i++;
} while (i <= 15);

