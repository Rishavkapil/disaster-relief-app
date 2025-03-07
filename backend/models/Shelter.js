const mongoose = require("mongoose");

const ShelterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
});

module.exports = mongoose.model("Shelter", ShelterSchema);
