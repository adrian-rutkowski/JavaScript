let cond1 = true;
if (cond1) {
  console.log('This message will print!');
}
// Prints: This message will print!

let cond2 = false;
if (cond2) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints: But the code in this block will!

/*
Logical operators:
and (&&)
or  (||)
not (!)
*/
let stopLight1 = 'green';
let pedestrians = '0';
if (stopLight1 === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' || tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// Truthy value
let myVariable = 'I Exist!';
if (myVariable) {
  console.log(myVariable)
} else {
  console.log('The variable does not exist.')
}

// Falsy value
let numberOfApples = 0;
if (numberOfApples) {
  console.log('Let us eat apples!');
} else {
  console.log('No apples left!');
}
// Prints 'No apples left!'

// Truthy assignment
let username = '';
let defaultName = username || 'Stranger';

// Ternary operator
let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If statements
let stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// Switch keyword
let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
// Prints 'Papayas are $1.29'