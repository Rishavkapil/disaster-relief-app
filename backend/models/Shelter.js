const mongoose = require("mongoose");

const ShelterSchema = new mongoose.Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number,
  },
  capacity: Number,
  availableBeds: Number,
});

module.exports = mongoose.model("Shelter", ShelterSchema);
