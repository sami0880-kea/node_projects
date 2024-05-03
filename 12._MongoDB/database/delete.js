import db from './connection.js';

const deleteIcecream = await db.types.deleteOne(
    { 
        name: "Sandwich Ice"
    })
    .then(result => {
        console.log(result)
    }
)