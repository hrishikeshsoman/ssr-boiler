const express = require("express");
const app = express();
const appGetController = require("./controllers/index.js")

app.get('/', appGetController);

module.exports = app;
