const app = require("express")();
const port = 8080;

console.log(`Server running on port ${port}...`);

let drinks = [
    { 
        id: 1, 
        name: "Faxe Kondi", 
        price: 7.00
    },
    { 
        id: 2, 
        name: "Pepsi", 
        price: 7.00 
    },
    {
        id: 3, 
        name: "Water", 
        price: 3.00 
    }
]; 

app.get("/drinks", (req, res) => {
    res.send(drinks);
});

app.get('/drinks/:id', (req, res) => {
    const id  = Number(req.params.id);
    const drink = drinks.find(drink => drink.id == id);
    if (!drink) res.send({ data: "Drink not found"});
    res.send(drink);
});

app.listen(port);