import express from "express";
import appGetController from "./controllers/index.js";
const app = express();

app.get('/', appGetController);

export default app;
