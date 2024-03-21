import { Router } from 'express';
import { introductionPage, toolsPage, expressPage, fundamentalsPage, exportimportPage, renderingPage, cleancodePage} from "../util/readPages.js";

const router = Router();

router.get("/", (req, res) => {
    res.send(introductionPage);
});

router.get("/tools", (req, res) => {
    res.send(toolsPage);
});

router.get("/express", (req, res) => {
    res.send(expressPage);
});

router.get("/fundamentals", (req, res) => {
    res.send(fundamentalsPage);
});

router.get("/export-import", (req, res) => {
    res.send(exportimportPage);
});

router.get("/rendering", (req, res) => {
    res.send(renderingPage);
});

router.get("/clean-code", (req, res) => {
    res.send(cleancodePage);
});

export default router;