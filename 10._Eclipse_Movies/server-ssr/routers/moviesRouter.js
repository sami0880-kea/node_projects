// ASSIGNMENT: Create a router
import { Router } from 'express';
const router = Router();

const eclipseMovies = [
    {
        id: 1,
        title: "Sun in a net",
        director: "Stefan Uher",
        year: 1963
    },
    {
        id: 2,
        title: "L'eclipse",
        director: "Michelangelo Antonio",
        year: 1969
    }
];

router.get("/api/movies", (req, res) => {
    res.send({ data: eclipseMovies });
});

export default router;