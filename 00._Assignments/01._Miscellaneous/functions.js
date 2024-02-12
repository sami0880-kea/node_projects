// Normal function
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Anonymous Function
const getRandomIntAnonymous = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Arrow Function
const getRandomIntArrow = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min); 
}

// Oneliner arrow function
const getRandomIntArrowOneliner = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min); 

// Generic Action Performer
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}


const running = (name) => `${name} is running`;

// ASSIGNMENT: Write code below so that you console log "Alex is running"
const alexRunningResult = genericActionPerformer("Alex", running);
console.log(alexRunningResult);

// ASSIGNMENT: Create a single line below that prints "Louis is eating"
console.log(genericActionPerformer("Louis", (name) => `${name} is eating`))

/* 
console.log(`getRandomInt: ${getRandomInt(5, 10)}`);
console.log(`getRandomIntAnonymous: ${getRandomIntAnonymous(5, 10)}`);
console.log(`getRandomIntArrow: ${getRandomIntArrow(5, 10)}`);
console.log(`getRandomIntArrowOneliner: ${getRandomIntArrowOneliner(5, 10)}`); 
*/
