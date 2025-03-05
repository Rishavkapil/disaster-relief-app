const HelpRequest = require("../models/HelpRequest");

// Submit a help request
exports.requestHelp = async (req, res) => {
  try {
    console.log("Received Request Body:", req.body); // Debugging log

    const { name, contact, location, helpType, urgency, notes } = req.body;

    // Ensure all required fields are provided
    if (!name || !contact || !location || !helpType || !urgency) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const newRequest = new HelpRequest({
      name,
      contact,
      location,
      helpType,
      urgency,
      notes,
    });

    await newRequest.save();
    res.status(201).json({ message: "Help request submitted successfully", data: newRequest });
  } catch (error) {
    console.error("Error submitting help request:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all help requests
exports.getHelpRequests = async (req, res) => {
  try {
    const requests = await HelpRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching help requests:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a single help request by ID
exports.getHelpRequestById = async (req, res) => {
  try {
    const request = await HelpRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ message: "Help request not found" });
    res.status(200).json(request);
  } catch (error) {
    console.error("Error fetching help request:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Update help request status
exports.updateHelpRequest = async (req, res) => {
  try {
    const { status } = req.body;
    const request = await HelpRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!request) return res.status(404).json({ message: "Help request not found" });
    res.status(200).json({ message: "Help request updated", data: request });
  } catch (error) {
    console.error("Error updating help request:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a help request
exports.deleteHelpRequest = async (req, res) => {
  try {
    const request = await HelpRequest.findByIdAndDelete(req.params.id);
    if (!request) return res.status(404).json({ message: "Help request not found" });
    res.status(200).json({ message: "Help request deleted" });
  } catch (error) {
    console.error("Error deleting help request:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
