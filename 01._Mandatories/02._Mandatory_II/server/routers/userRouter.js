import { Router } from 'express';
import db from "../database/connection.js";
import jwt from 'jsonwebtoken';
const router = Router();

router.get('/user', async (req, res) => {
    try {
        const cookie = req.cookies['jwt'];
        const claims = jwt.verify(cookie, process.env.JWT_SECRET);

        if(!claims) return res.status(401).send({ data: "Not logged in!" })

        const [users] = await db.query('SELECT * FROM users WHERE id = ?', [claims.id]);
        const {password, ...data} = await users[0]
        res.send(data)
    } catch(e) {
        return res.status(401).send({ data: "Not logged in!" })
    }
})

export default router;