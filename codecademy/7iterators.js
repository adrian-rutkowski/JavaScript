// Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes; // Assigning a function to a variable

isTwoPlusTwo(); // Calling the original function via a variable

console.log(isTwoPlusTwo.name) // Accessing the name property of the original function

// Functions as Parameters
const addTwo = num => { // lower level function, so called callback function
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
        return func(val)
    } else { return "inconsistent results" }
}

console.log(checkConsistentOutput(addTwo, 4));

// .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log("I want to eat a " + fruit));

// .map() Method
const animals = [
    "Hen",
    "elephant",
    "llama",
    "leopard",
    "ostrich",
    "Whale",
    "octopus",
    "rabbit",
    "lion",
    "dog",
];

const secretMessage = animals.map((animal) => {
    return animal[0];
});

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map((number) => {
    return number / 100;
});

// .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers2 = randomNumbers.filter(number => { return number < 250 })

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => { return word.length > 7 })

// .findIndex() Method
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => { return animal === "elephant" })

const startsWithS = animals2.findIndex(animal => { return animal[0] === "s" })

// .reduce() Method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue
}, 10);

console.log(newSum)

// various examples
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
    return word.length < 6;
}));

const interestingWords = words.filter((word) => { return word.length > 5 })

console.log(interestingWords.every((word) => { return word.length > 5 }));
