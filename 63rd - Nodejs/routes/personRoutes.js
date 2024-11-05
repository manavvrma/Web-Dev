const express = require("express");
const router = express.Router();

const Person = require("../models/person.js");

// Post route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; // Assuming the request body contains the person data

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data found");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Data not found" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //Extract workType from the URL parameter
    if (
      workType === "chef" ||
      workType === "waiter" ||
      workType === "manager"
    ) {
      const response = await Person.find({ work: workType });
      console.log("worktype found");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
