//const express = require("express");
//const app = express();

const app = require("express")();
const port = 8080;

console.log(`Server running on port ${port}...`);

// ROUTE
    // ENDPOINT
        // Callback Func.
        // Request, response
app.get("/", (req, res) => {
    res.send({
        data: "Welcome"
    });
});

// Route
app.get("/secondRoute", (req, res) => {
    res.send({
        data: [1, 2, 3, 4]
    });
});

// ASSIGNMENT: Create a third route with the endpoint thirdRoute
app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    res.send({
        firstValue: firstValue,
        secondValue: secondValue
    });
});

let balance = 100;
app.get("/wallet/withdraw/:amount", (req, res) => {
    /*
    ASSIGNMENT: Start with the balance of 100 in the wallet every time a client calls 
    this route the value of paymentOut should substracted from the balance
    if the paymentOut creates a balance below 0 then tell the client "Sorry, not enough funds"
    */
    const amount = Number(req.params.amount);
    const newBalance = balance - amount;

    if(!amount) {
        res.send({
            data: "You've submitted an incorrect amount."
        })
    } else if(newBalance < 0) {
        res.send({
            data: "Sorry, not enough funds!"
        });
    } else {
        balance = newBalance;
        res.send({
            data: `You've withdrawn ${amount}, your balance is now ${balance}.`
        });
    }
});

app.get("/wallet/deposit/:amount", (req, res) => {
    /*
    ASSIGNMENT: Create a route called that allows a client
    to fill up their wallet with a specific amount
    */
    const amount = Number(req.params.amount);

    if(!amount) {
        res.send({
            data: "You've submitted an incorrect amount."
        })
    } else {
        balance += amount;
        res.send({
            data: `You've deposited ${amount}, your balance is now ${balance}.`
        });
    }
});

app.get("/wallet/balance", (req, res) => {
    res.send({
        data: `Your balance is ${balance}.`
    });
});

app.get("/page", (req, res) => {
    res.send("<h1>Welcome to my page</h1>");
});


/*
HTTP: 80
HTTPS: 443
HTTP DEV: 8080
HTTPS DEV: 9090
*/
app.listen(port);