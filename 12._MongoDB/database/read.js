import db from './connection.js';

// const getIceCreamUnder20 = await db.types.find({ price: { $gte: 20 } }).toArray();
const allIceCreams = await db.types.find().toArray();
console.log(allIceCreams);

// const firstIceCreamBrand = await db.brands.findOne();
// console.log(firstIceCreamBrand)