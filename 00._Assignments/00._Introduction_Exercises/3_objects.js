// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { 
    message: "Hello, earthling! I bring peace." 
};

// Log the message
console.log(`Exercise 1 - ${myObject.message}`)

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const myInfo = {
    name: "Samim",
    age: 20
}

// --------------------------------------
// Exercise 3 - Add a key-value pair 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true

console.log(`Exercise 3 - ${stackOverflow.isAllowed}`)

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { 
    description: "The best song in the world." 
};

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description
thisSong.about = "Just a tribute."

console.log(`Exercise 4 - ${thisSong.about}`)

// --------------------------------------

