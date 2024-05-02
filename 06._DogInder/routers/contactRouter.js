import { Router } from 'express';

const router = Router();

router.post("/api/contact", async (req, res) => {
    const form_data = req.body;
    console.log(form_data)
    res.redirect("/");
})

export default router;