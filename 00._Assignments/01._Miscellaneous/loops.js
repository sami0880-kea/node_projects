// Loop methods

// forEach, map, filter, sort, find, reduce

const dogs = [
    {name: "Lassie", fameLevel: 13},
    {name: "Beethoven", fameLevel: 8},
    {name: "Hachiko", fameLevel: 18},
    {name: "Balto", fameLevel: 5}
];

// ASSIGNMENT: Add a famelevel of +3 for all dogs
const increasedFame = dogs.map((dog) => {
    let newFameLevel = dog.fameLevel + 3
    dog.fameLevel = newFameLevel
    return dog
});

console.log("increasedFame", increasedFame);

// ASSIGNMENT: Task add the key male and value true for all except for Lassie (male: false)
const genderedDogs = increasedFame.map((dog) => ({
    ...dog,
    isMale: dog.name !== "Lassie"
}));

console.log("genderedDogs", genderedDogs);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubledNumbers);
