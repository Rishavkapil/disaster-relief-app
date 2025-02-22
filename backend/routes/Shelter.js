const express = require("express");
const router = express.Router();
const Shelter = require("../models/Shelter");

// Get all shelters
router.get("/", async (req, res) => {
  try {
    const shelters = await Shelter.find();
    res.status(200).json(shelters);
  } catch (error) {
    res.status(500).json({ message: "Error fetching shelters", error });
  }
});

// Add a new shelter
router.post("/", async (req, res) => {
  const { name, location, capacity } = req.body;
  try {
    const newShelter = new Shelter({ name, location, capacity });
    await newShelter.save();
    res.status(201).json(newShelter);
  } catch (error) {
    res.status(500).json({ message: "Error adding shelter", error });
  }
});

module.exports = router;
