const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}); 

app.listen(port, () => console.log(`Server running on port ${port}`));