const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require("./config");

const userRoutes = require("./src/routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(`/api/${API_VERSION}`, userRoutes);

/* Configuración de los header HTTP */
module.exports = app;