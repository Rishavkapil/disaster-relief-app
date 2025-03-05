const express = require("express");
const router = express.Router();
const helpRequestController = require("../controller/HelpRequestController");

// Corrected routes
router.post("/", helpRequestController.requestHelp); // POST /api/help-requests
router.get("/", helpRequestController.getHelpRequests); // GET /api/help-requests
router.get("/:id", helpRequestController.getHelpRequestById); // GET /api/help-requests/:id
router.put("/:id", helpRequestController.updateHelpRequest); // PUT /api/help-requests/:id
router.delete("/:id", helpRequestController.deleteHelpRequest); // DELETE /api/help-requests/:id

module.exports = router;
