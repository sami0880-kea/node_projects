const express = require("express");

const app = express();
const PORT = "8080";

app.use(express.static("public"));

const { helicopterFactory } = require('./util/helicopterFactory.js')
console.log(helicopterFactory())
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

// ASSIGNMENT: Create a new route called with the endpoint publicsquare that serves publicsquare.html
app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicsquare/publicsquare.html")
});

app.get("/proxy", (req, res) => {
    fetch('https://www.google.com')
      .then(response => response.text())
      .then(data => res.send(data))
});


app.listen(PORT, () => console.log("Listening on port", PORT))