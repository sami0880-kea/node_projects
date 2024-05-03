import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
    origin: true,
    credentials: true
}));

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { 
//         secure: false
//     }
// }));

import authRouter from './routers/authRouter.js';
app.use('/api', authRouter);

import userRouter from './routers/userRouter.js';
app.use('/api', userRouter);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server running on port", PORT));