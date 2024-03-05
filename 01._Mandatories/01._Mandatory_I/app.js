import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.use(express.static('public'));

// ------ HTML ------
app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/pages/homepage/homepage.html'));
})

// ------ API ------


app.listen(port, () => console.log(`Server running on port`, port));