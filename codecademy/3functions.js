// Simple function example
function getReminder() {
    console.log("Water the plants")
};

getReminder(); // Calling a function

// Function with parameteres
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
};

sayThanks("Cole");

// Function with default parameters
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
};

makeShoppingList();

// Return
function monitorCount(rows, columns) {
    return rows * columns
};

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Helper functions
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4)
console.log(totalCost)

// Function Expressions
// Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined. 
const plantNeedsWater = function (day) {
    if (day === "Wednesday") {
        return true
    } else { return false }
}

plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"))

// Arrow Functions
const plantNeedsWaterArrow = (day) => { // word 'function' is replaced by '=>' after brackets
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

// Concise Body Arrow Functions 
const plantNeedsWaterNormal = (day) => {
    return day === 'Wednesday' ? true : false;
};
const plantNeedsWaterConcise = day => day === 'Wednesday' ? true : false; // parenthesis, brackets and return are gone
