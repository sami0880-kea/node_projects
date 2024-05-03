import db from './connection.js';

const createIceCream = await db.types.insertOne({
    name: "Sandwich Ice",
    price: 8
})

console.log(createIceCream)