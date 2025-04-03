const express = require("express");
const router = express.Router();
const victimController = require("../controller/VictimController.js");

router.post("/", victimController.registerVictim); // POST /api/victims
router.get("/", victimController.getAllVictims); // GET /api/victims
router.get("/:id", victimController.getVictimById); // GET /api/victims/:id
router.put("/:id", victimController.updateVictim); // PUT /api/victims/:id
router.delete("/:id", victimController.deleteVictim); // DELETE /api/victims/:id

module.exports = router;
