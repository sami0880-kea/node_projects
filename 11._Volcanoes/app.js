import express from 'express';
const app = express();
const PORT = process.env.PORT ?? 8080

app.use(express.json());

import volcanoRouter from './routers/volcanoRouters.js'
app.use(volcanoRouter);

app.listen(PORT, () => console.log("Server running on port", PORT));