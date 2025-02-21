const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, enum: ["victim", "volunteer"], required: true },
  location: {
    lat: Number,
    lng: Number,
  },
});

module.exports = mongoose.model("User", UserSchema);
