import { readPage, renderPage } from "./templateEngine.js";

const introductionpage = readPage("./public/pages/introduction/introduction.html");
export const introductionPage = renderPage(introductionpage, {
    tabTitle: "FSDocumentation - Introduction",
});

const toolspage = readPage("./public/pages/tools/tools.html");
export const toolsPage = renderPage(toolspage, {
    tabTitle: "FSDocumentation - Tools",
});

const expresspage = readPage("./public/pages/express/express.html");
export const expressPage = renderPage(expresspage, {
    tabTitle: "FSDocumentation - Express",
});

const fundamentalspage = readPage("./public/pages/fundamentals/fundamentals.html");
export const fundamentalsPage = renderPage(fundamentalspage, {
    tabTitle: "FSDocumentation - Fundamentals",
});

const exportimportpage = readPage("./public/pages/export-import/export-import.html");
export const exportimportPage = renderPage(exportimportpage, {
    tabTitle: "FSDocumentation - Export / Import",
});

const renderingpage = readPage("./public/pages/rendering/rendering.html");
export const renderingPage = renderPage(renderingpage, {
    tabTitle: "FSDocumentation - Rendering",
});

const cleancode = readPage("./public/pages/clean-code/clean-code.html");
export const cleancodePage = renderPage(cleancode, {
    tabTitle: "FSDocumentation - Clean Code",
});