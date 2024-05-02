import "dotenv/config"
import express from 'express';
import session from "express-session";
import path from "path";
import livereload from 'livereload';
import connectLivereload from 'connect-livereload';
import moviesRouter from "./routers/moviesRouter.js"
import customRouter from "./routers/customersRouter.js"

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(express.json());
app.use(express.static(path.resolve('../client/dist')));

const liveReloadServer = livereload.createServer();
liveReloadServer.watch('../client/dist');
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
      liveReloadServer.refresh("/");
  }, 500);
});
app.use(connectLivereload());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }))

app.use(moviesRouter);
app.use(customRouter)


app.get("*", (req, res) => {
  res.sendFile(path.resolve('../client/dist/index.html'))
});

app.listen(PORT, () => console.log("Server running on port", PORT));

