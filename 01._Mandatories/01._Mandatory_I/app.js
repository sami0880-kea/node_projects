import express from "express";
import pagesRouter from "./routers/pagesRouter.js";

const app = express();
const port = 8080;

app.use(express.static('public'));

// ------ HTML ------
app.use(pagesRouter);

app.listen(port, () => console.log(`Server running on port`, port));