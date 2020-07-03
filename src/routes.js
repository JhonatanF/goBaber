const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Jhonatan Feitosa - Hello World");
});

module.exports = routes;
