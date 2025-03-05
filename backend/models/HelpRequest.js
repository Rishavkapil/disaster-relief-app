const mongoose = require("mongoose");

const HelpRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    location: { type: String, required: true },
    helpType: { type: String, required: true },
    urgency: { type: String, required: true },
    notes: { type: String },
    status: { type: String, default: "pending" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HelpRequest", HelpRequestSchema);
