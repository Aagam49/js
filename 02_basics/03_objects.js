const mySym = Symbol("mySym");
const users = {
    name: "Aagam",
    age: 22,
    hobbies: ["reading", "gaming", "coding"],
    greet: function() {
        console.log("Hello, " + this.name + "!");
    },
    [mySym] : "mySymValue",
}

console.log(users.name); // Accessing property using dot notation
console.log(users["age"]); // Accessing property using bracket notation

users.greet(); // Calling the greet method

console.log(users.hobbies[1]); // Accessing an element from the hobbies array

// Adding a new property
users.country = "USA";
console.log(users.country);

// Modifying an existing property
users.age = 23;
console.log(users.age);
// Object.freeze(users); // Freezing the object to prevent further modifications

// Deleting a property
delete users.hobbies;
console.log(users.hobbies); // undefined

// Accessing symbol property
console.log(users[mySym]);

users.greetings = function() {
    console.log("Welcome, " + this.name + "!");
}

users.greetings();