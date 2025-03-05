const Victim = require("../models/Victims");

exports.registerVictim = async (req, res) => {
    try {
        const { name, age, location, status, notes } = req.body;
        if (!name || !age || !location) {
            return res.status(400).json({ message: "Name, age, and location are required." });
        }

        const newVictim = new Victim({ name, age, location, status, notes });
        await newVictim.save();
        res.status(201).json({ message: "Victim registered successfully", data: newVictim });
    } catch (error) {
        console.error("Error registering victim:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

exports.getAllVictims = async (req, res) => {
    try {
        const victims = await Victim.find().sort({ createdAt: -1 });
        res.status(200).json(victims);
    } catch (error) {
        console.error("Error fetching victims:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

exports.getVictimById = async (req, res) => {
    try {
        const victim = await Victim.findById(req.params.id);
        if (!victim) return res.status(404).json({ message: "Victim not found" });
        res.status(200).json(victim);
    } catch (error) {
        console.error("Error fetching victim:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

exports.updateVictim = async (req, res) => {
    try {
        const victim = await Victim.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!victim) return res.status(404).json({ message: "Victim not found" });
        res.status(200).json({ message: "Victim updated", data: victim });
    } catch (error) {
        console.error("Error updating victim:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

exports.deleteVictim = async (req, res) => {
    try {
        const victim = await Victim.findByIdAndDelete(req.params.id);
        if (!victim) return res.status(404).json({ message: "Victim not found" });
        res.status(200).json({ message: "Victim deleted" });
    } catch (error) {
        console.error("Error deleting victim:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
