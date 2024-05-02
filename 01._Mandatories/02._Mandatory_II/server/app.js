import 'dotenv/config';
import express from 'express';
import session from "express-session"
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({ 
    credentials: true, 
    origin: true 
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false
    }
}));

import usersRouter from './routers/usersRouter.js';
app.use(usersRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server running on port", PORT));