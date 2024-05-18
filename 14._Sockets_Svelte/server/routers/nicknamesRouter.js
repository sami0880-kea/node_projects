// ASSIGNMENT: Setup the router and create two routes for get and post nickname
import { Router } from 'express';
const router = Router();

router.get("/nicknames", (req, res) => {
    res.send({ data: req.session.nickname });
});

router.post("/nicknames", (req, res) => {
    const { nickname } = req.body;
    req.session.nickname = nickname
    res.send({ data: nickname });
});

export default router;