// Array example
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

// Accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0]

console.log(listItem)
console.log(famousSayings[2])
console.log(famousSayings[3]) // Won't print anything as the item at index 3 does not exist

// Update elements
let groceryList2 = ['bread', 'tomatoes', 'milk'];
groceryList2[1] = "avocados" // this will replace tomatoes with avocados

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = "Mayo"
console.log(condiments)

condiments = ["Mayo"]
console.log(condiments)

utensils[3] = "Spoon" // possibile to update the array even though it's a const
console.log(utensils)

// The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push("hoover", "walk the dog")
console.log(chores)

// The .pop() Method
chores.pop()
console.log(chores)

// More Array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift() // will remove the 1st item
console.log(groceryList)

groceryList.unshift("popcorn") // will add popcorn as a 1st item
console.log(groceryList)

console.log(groceryList.slice(1, 4)) // will only return bananas, coffee beans and brown rice (index start and end)

console.log(groceryList)

const pastaIndex = groceryList.indexOf("pasta")
console.log(pastaIndex)

// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)

function removeElement(newArr) {
    newArr.pop()
}

removeElement(concept)
console.log(concept)

// Nested Arrays
numberClusters = [[1, 2], [3, 4], [5, 6]]

const target = numberClusters[2][1] // first index 2 corresponds to [5,6] nested array and then index 1 corresponds to 6 from that array
