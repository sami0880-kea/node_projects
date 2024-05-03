import { Router } from 'express';
import db from "../database/connection.js";
import { hash, compare } from '../util/passwordUtil.js';
import jwt from 'jsonwebtoken';
const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length > 0) {
            const user = users[0];
            const match = await compare(password, user.password);
            if (match) {
                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
                res.cookie('jwt', token, {
                    httpOnly: true,
                    maxAge: 24 * (60 * 60 * 1000)
                })
                res.status(200).send('Logged in succesfully');
            } else {
                res.status(404).send('Invalid login details');
            }
        } else {
            res.status(404).send('Invalid login details');
        }
    } catch (error) {
        res.status(500).send('Login error');
    }
});

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const [users] = await db.query('SELECT email FROM users WHERE email = ?', [email]);
        if (users.length > 0) return res.status(409).send('Email already exists');

        const hashedPassword = await hash(password);
        await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.status(200).send('Logged out successfully');
});

export default router;