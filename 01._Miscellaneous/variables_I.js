// Use `const` as default for variable declaration
const myName = "Samim";

const me = {};
me.name = myName;

/*
  `const` is constant NOT in the value but in the assignment
  meaning that it cannot be reassigned and thus also HAS to be assigned

  SyntaxError: Missing initializer in const declaration
  const text;
*/

const hobbies = ["Coding", "Eating"];
hobbies.push("Sleeping");

me.hobbies = hobbies

console.log("Me: ", me);