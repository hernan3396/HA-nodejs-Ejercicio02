const express = require("express");

const personas = require("./personas.js");

const app = express();

app.get("/", (req, res) => res.send("¡Hola Hack Academy!"));
app.get("/home", (req, res) => res.send("¡Hola Hack Academy! - Home"));
app.get("/personas", (req, res) => res.send(personas));

app.listen(3000, () =>
  console.log("¡Servidor corriendo en http://localhost:3000")
);
