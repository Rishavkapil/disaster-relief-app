const Volunteer = require("../models/Volunteers");

// Add Volunteer
exports.addVolunteer = async (req, res) => {
    try {
        const { name, location, skills } = req.body;
        const newVolunteer = new Volunteer({ name, location, skills });
        await newVolunteer.save();
        res.status(201).json({ message: "Volunteer added successfully", volunteer: newVolunteer });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Get All Volunteers
exports.getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.status(200).json(volunteers);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
