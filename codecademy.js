console.log('Hello World');
console.log('Hello' + ' ' + 'World!'); //string concatenation, prints the same as above
/* multiline
comment */

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 50));
console.log(Number.isInteger(10));
// use 'node filename.js' command in the terminal to run the file

/* VARIABLES */
var favoriteFood = 'pizza'; // var is a deprecated keyword to initiate variables
var numOfSlices = 8;
console.log(favoriteFood); // prints out the value of the variable
console.log(numOfSlices);

let changeMe = true; // let replaces var, variable can have no value - undefined
changeMe = false; // reassigning the value, NO LET keyword
console.log(changeMe); // priting the current value of the variable, expecting 'false'

const entree = 'Enchiladas'; // when using const keyword, the variable must have a value, cannot be changed
console.log(entree);
/*
entree = 'Tacos'; // this throws TypeError: Assignment to constant variable.
const testing; // this throws SyntaxError: Missing initializer in const declaration
*/