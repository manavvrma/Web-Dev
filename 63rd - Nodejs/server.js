console.log("Start of server");
const express = require("express");
const app = express();
const db = require("./db.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

const MenuItem = require("./models/MenuItem.js");

app.get("/", function (req, res) {
  res.send("Welcom to my website!");
});

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
