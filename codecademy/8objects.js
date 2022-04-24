let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032,
    },
    crew: {
        captain: {
            name: "Sandra",
            degree: "Computer Engineering",
            encourageTeam() {
                console.log("We got this!");
            },
            "favorite foods": ["cookies", "cakes", "candy", "spinach"],
        },
    },
    engine: {
        model: "Nimbus2000",
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD",
        },
        "back-up": {
            battery: "Lithium",
            terabytes: 50,
        },
    },
    homePlanet: "Earth",
    color: "silver",
    "Fuel Type": "Turbo Fuel",
    numCrew: 5,
    flightPath: ["Venus", "Mars", "Saturn"],
    'Active Mission': true,
    homePlanet: 'Earth',
};

// Creating Object Literals
let fasterShip = {
    color: "silver", // key doesn't need quotation marks if it's simple enough
    "Fuel Type": "Turbo Fuel"
};

// Accessing Properties
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

// Bracket Notation
let propName = 'Active Mission';
let isActive = spaceship["Active Mission"]
console.log(spaceship[propName])

// Property Assignment
spaceship.color = "glorious gold" // reassigning the property value
spaceship.numEngines = 5 // adding a new property
delete spaceship["Secret Mission"] // removing the property

// Methods
let retreatMessage =
    "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// Write your code below
let alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log("Spim... Borp... Glix... Blastoff!");
    },
};

alienShip.retreat()
alienShip.takeOff()

// Nested Objects
let capFave = spaceship.crew.captain["favorite foods"][0];
spaceship.passengers = [{ name: "Space Dog" }];
let firstPassenger = spaceship.passengers[0];

// Pass By Reference
let greenEnergy = (obj) => {
    obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
    obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

// Looping Through Objects
let spaceship2 = {
    crew: {
        captain: {
            name: "Lily",
            degree: "Computer Engineering",
            cheerTeam() {
                console.log("You got this!");
            },
        },
        "chief officer": {
            name: "Dan",
            degree: "Aerospace Engineering",
            agree() {
                console.log("I agree, captain!");
            },
        },
        medic: {
            name: "Clementine",
            degree: "Physics",
            announce() {
                console.log(`Jets on!`);
            },
        },
        translator: {
            name: "Shauna",
            degree: "Conservation Science",
            powerFuel() {
                console.log("The tank is full!");
            },
        },
    },
};

for (let crewMember in spaceship2.crew) {
    console.log(`${crewMember}: ${spaceship2.crew[crewMember].name}`);
}

for (let crewMemberRole in spaceship2.crew) {
    console.log(
        `${spaceship2.crew[crewMemberRole].name}: ${spaceship2.crew[crewMemberRole].degree}`
    );
}
