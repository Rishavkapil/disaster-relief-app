const mongoose = require("mongoose");

const VictimSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        location: { type: String, required: true },
        status: { type: String, default: "unknown" }, // e.g., "safe", "injured", "missing"
        notes: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Victim", VictimSchema);
