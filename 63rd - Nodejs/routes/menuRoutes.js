const express = require("express");
const router = express.Router();

const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("Loading menu items...");
    const data = await MenuItem.find();
    console.log("data found");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Data not found" });
  }
});

router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (
      tasteType === "sweet" ||
      tasteType === "sour" ||
      tasteType === "salty" ||
      tasteType === "bitter"
    ) {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("taste found");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid taste type" });
    }
  } catch (err) {}
});

module.exports = router;
