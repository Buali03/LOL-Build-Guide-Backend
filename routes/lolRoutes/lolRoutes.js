const express = require("express");
const router = express.Router();
const secureRoute = require("../../middleware/secureRoute");
const lolGuideController = require("../../controllers/lolGuideController")

router.post("/create", lolGuideController.createLOLGuide)

module.exports = router
