import bcrypt from "bcrypt";

const saltRounds = 14;
const plaintextPassword = "Hunter123";
const passowrdHash = "$2b$14$fgCwkUEZdZN0mZ9cYxihJOJjS4AOQpkeMdKCotL.YgxQ7QLbzZAJ6";

const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
console.log(hashedPassword);

const isSame = await bcrypt.compare(plaintextPassword, passowrdHash);
console.log(isSame);