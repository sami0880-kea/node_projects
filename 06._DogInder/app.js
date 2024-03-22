import express from "express";
import pagesRouter from "./routers/pagesRouter.js";
import matchesRouter from "./routers/matchesRouter.js";
import contactRouter from "./routers/contactRouter.js";

const app = express();
const PORT = 8080;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// ---------- HTML ----------
app.use(pagesRouter);

// ---------- API ----------
app.use(matchesRouter);
app.use(contactRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));