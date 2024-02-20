const express = require("express");

const app = express();
const port = 8080;

let drinks = [
    { id: 1, name: "Mojito"},
    { id: 2, name: "Isbjørn"},
    { id: 3, name: "Old Fashion"},
];

app.use(express.json())

app.get("/drinks", (req, res) => {
    res.status(200).send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
    const providedId = Number(req.params.id);
    const foundDrink = drinks.find((drink) => providedId === drink.id);
    if(!foundDrink) res.status(404).send({ data: "No drink found with id " + providedId});
    res.status(200).send({ data: foundDrink});
});

app.post("/drinks", (req, res) => {
    const name = req.body.name;
    const newDrink = {
        id: drinks.length + 1,
        name,
    };
    drinks.push(newDrink);
    res.status(200).send({ data: newDrink });
});

app.put("/drinks/:id", (req, res) => {
    const providedId = Number(req.params.id);
    const name = req.body.name;
    const drinkIndex = drinks.findIndex((drink) => providedId === drink.id);
    if (drinkIndex === -1) return res.status(404).send({ data: "No drink found with id " + providedId });
    drinks[drinkIndex] = { id: providedId, name };
    res.status(200).send({ data: drinks[drinkIndex] });
});

app.patch("/drinks/:id", (req, res) => {
    const providedId = Number(req.params.id);
    const name = req.body.name;
    const drinkIndex = drinks.findIndex((drink) => providedId === drink.id);
    if (drinkIndex === -1) return res.status(404).send({ data: "No drink found with id " + providedId });
    drinks[drinkIndex] = { id: providedId, name };
    res.status(200).send({ data: drinks[drinkIndex] });
});


app.delete("/drinks/:id", (req, res) => {
    const providedId = Number(req.params.id);
    const initialLength = drinks.length;
    drinks = drinks.filter((drink) => providedId !== drink.id);
    if (drinks.length === initialLength) return res.status(404).send({ data: "No drink found with id " + providedId });
    res.status(200).send({ data: `Drink with ID ${providedId} deleted!` });
});

app.listen(port, (error) => {
    if(error) console.log("Error starting the server");
    console.log("Server is running on port", port);
});