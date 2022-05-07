// this Keyword
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return "I am " + this.model + " and my current energy level is " + this.energyLevel + "."
    }
};

console.log(robot.provideInfo())

// getters
const robot2 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === "number") { return "My current energy level is " + this._energyLevel } else { return "System malfunction: cannot retrieve energy level" }
    }
}

console.log(robot2.energyLevel)

// setters
const robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === "number" && num >= 0) {
            this._numOfSensors = num
        } else {
            console.log("Pass in a number that is greater than or equal to 0")
        }
    }
};

robot3.numOfSensors = 100
console.log(robot3.numOfSensors)

// Factory Functions
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() { console.log("Beep Boop") }
    }
}

const tinCan = robotFactory("P-500", true);

tinCan.beep()
console.log(tinCan.model)
console.log(tinCan.mobile)

// Property Value Shorthand
function robotFactory2(model, mobile) {
    return {
        model, // no need to map the parameter
        mobile, // no need to map the parameter
        beep() {
            console.log('Beep Boop');
        }
    }
}

// Destructured Assignment
const robot4 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot4; // same name as the object's property
functionality.beep();

// Built-in Object Methods
const robot5 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot5);
console.log(robotKeys);

const robotEntries = Object.entries(robot5)
console.log(robotEntries);

const add = { laserBlaster: true, voiceRecognition: true }
const newRobot = Object.assign(add, robot5)
console.log(newRobot);
