const express = require("express");
// const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

console.log(MONGODB_URI);

mongoose
  .connect(MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("Todo chido"))
  .catch((err) => console.error("No jalo", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Check Check at ${port}`);
});
