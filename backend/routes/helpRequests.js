const express = require("express");
const router = express.Router();
const HelpRequest = require("../models/HelpRequest");

// Create Help Request
router.post("/", async (req, res) => {
  try {
    const helpRequest = new HelpRequest(req.body);
    await helpRequest.save();
    res.status(201).json(helpRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Help Requests
router.get("/", async (req, res) => {
  try {
    const requests = await HelpRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
