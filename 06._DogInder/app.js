import express from "express";
import path from "path";
import getMatches from "./util/matches.js";

const app = express();
const PORT = 8080;

app.use(express.static('public'));

// ---------- HTML ----------
app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/pages/homepage/homepage.html'));
})

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve('public/pages/matches/matches.html'));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve('public/pages/contact/contact.html'));
})

// ---------- API ----------
app.get("/api/matches", async (req, res) => {
    const { matchesAmount } = req.params;
    const matches = await getMatches(matchesAmount);
    res.send(matches)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));