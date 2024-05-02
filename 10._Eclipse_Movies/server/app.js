import "dotenv/config"
import express from 'express';
import cors from 'cors';
import session from "express-session"
import moviesRouter from "./routers/moviesRouter.js"
import customRouter from "./routers/customersRouter.js"

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: true
}));
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))

app.use(moviesRouter);
app.use(customRouter)

app.listen(PORT, () => console.log("Server running on port", PORT));

