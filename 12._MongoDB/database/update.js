import db from './connection.js';

const updateIcecream = await db.types.updateOne(
{
    name: "Islagkage"
}, 
{
    $set: { price: 19 }
}).then(icecream => {
    console.log(icecream)
})