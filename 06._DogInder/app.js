import express from "express";
import pagesRouter from "./routers/pagesRouter.js";
import matchesRouter from "./routers/matchesRouter.js";

const app = express();
const PORT = 8080;
app.use(express.static('public'));

// ---------- HTML ----------
app.use(pagesRouter);

// ---------- API ----------
app.use(matchesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));