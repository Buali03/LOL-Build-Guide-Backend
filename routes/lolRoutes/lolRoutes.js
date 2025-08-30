const express = require("express");
const router = express.Router();
const secureRoute = require("../../middleware/secureRoute");
const lolGuideController = require("../../controllers/lolGuideController");

router.post("/create", lolGuideController.createLOLGuide);
router.get("/", lolGuideController.allLOLGuide);
router.get("/:id", lolGuideController.showLOLGuide);
router.put("/:id", lolGuideController.updateLOLGuide);
router.delete("/:id", lolGuideController.deleteLOLGuide);

module.exports = router;
