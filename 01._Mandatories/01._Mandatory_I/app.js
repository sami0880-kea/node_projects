import express from "express";
import pagesRouter from "./routers/pagesRouter.js";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.static('public'));

// ------ HTML ------
app.use(pagesRouter);

const server = app.listen(PORT, () => console.log(`> Server running on port`, server.address().port));