const mongoose = require("mongoose");

const HelpRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  description: String,
  urgency: { type: String, enum: ["low", "medium", "high"], required: true },
  location: {
    lat: Number,
    lng: Number,
  },
  status: { type: String, enum: ["pending", "resolved"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("HelpRequest", HelpRequestSchema);
