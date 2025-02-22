const express = require("express");
const router = express.Router();
const { addVolunteer, getVolunteers } = require("../controller/volunteerController");

// Routes
router.post("/", addVolunteer);
router.get("/", getVolunteers);

module.exports = router;
