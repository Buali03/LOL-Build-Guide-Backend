const express = require("express");
const router = express.Router();
const secureRoute = require("../../middleware/secureRoute");
const lolGuideController = require("../../controllers/lolGuideController");

router.post("/create", secureRoute, lolGuideController.createLOLGuide);
router.get("/", secureRoute, lolGuideController.allLOLGuide);
router.get("/:id", secureRoute, lolGuideController.showLOLGuide);
router.put("/:id", secureRoute, lolGuideController.updateLOLGuide);
router.delete("/:id", secureRoute, lolGuideController.deleteLOLGuide);

module.exports = router;
