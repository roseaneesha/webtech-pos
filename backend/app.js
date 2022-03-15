const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("hiiii");
});

app.listen(3000, () => {
  console.log("server running at 3000");
});
