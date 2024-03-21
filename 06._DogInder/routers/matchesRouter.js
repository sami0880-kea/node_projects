import { Router } from 'express';
import getMatches from "../util/matches.js";

const router = Router();

router.get("/api/matches", async (req, res) => {
    const { matchesAmount } = req.params;
    const matches = await getMatches(matchesAmount);
    res.send(matches);
})

export default router;