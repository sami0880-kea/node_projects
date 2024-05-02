import { Router } from "express";
const router = Router();

// ASSIGNMENT: Create a greeter middleware that says hello before passing them on the next route
function greeter(req, res, next) {
    console.log("Hello!");
    next();
}

// Middleware
function doorman(req, res, next) {
    if(req.query.secret?.toLowerCase() === "open sesame") {
        console.log("Allowed to enter!")
        next();
    } else {
        res.status(401).send({ message: "You are not allowed to get into the room "})
    }
}

router.get("/room", greeter, (req, res) => {
    res.send({ data: "You are in room 1" });
    //next();
});

    // Inline Middleware
router.get("/room", (req, res, next) => {
    console.log("On the next room... Room 2 coming up!");
    next();
},(req, res) => {
    res.send({ data: "You are in room 2" });
});

export default router;