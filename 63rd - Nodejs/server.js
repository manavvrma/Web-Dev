console.log("Start of server");
const express = require("express");
const app = express();
const db = require("./db.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body

const Person = require("./models/person.js");

app.get("/", function (req, res) {
  res.send("Welcom to my website!");
});

// Post route to add a person
app.post("/person", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    // Create a new Person instance
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data found");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Data not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
