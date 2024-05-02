import { Router } from 'express';
import db from "../database/connection.js";
import { hash, compare } from '../util/passwordUtil.js';
const router = Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length > 0) {
            const user = users[0];
            const match = await compare(password, user.password);
            if (match) {
                req.session.user_id = user.id;
                res.status(200).send('Logged in successfully');
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

export default router;