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

let u = 4;
u = u + 1;
console.log(u); // Output: 5

let w = 4;
w += 1;
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// Increment by 1
let a = 10;
a++;
console.log(a); // Output: 11

// Decrement by 1
let b = 20;
b--;
console.log(b); // Output: 19

// String concatenation
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.'

// String interpolation
const pet = 'armadillo';
console.log(`I own a pet ${pet}.`);
// Output: I own a pet armadillo.

// typeof operator
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean