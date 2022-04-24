// For loop
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

for (let counter = 3; counter >= 0; counter--) { // backward loop
    console.log(counter);
}

// Looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log("I would love to visit " + vacationSpots[i])
};

// Nested loops
let bobsFollowers = ["Eden", "Fernando", "Cristiano", "Adrian"]
let tinasFollowers = ["Adrian", "Eden", "Paula"]
let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i])
            console.log(mutualFollowers)
        }
    }
}

// While loop
const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard != "spade") {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Do While statements
let cupsOfSugarNeeded = 3
let cupsAdded = 0

do {
    cupsAdded++
    console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);

// Break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i])
    if (rapperArray[i] === "Notorious B.I.G.") {
        break
    }
}
console.log("And if you don't know, now you know.");
