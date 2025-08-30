const LOLGuide = require("../models/LOLGuide/LOLGuide");
const jwt = require("jsonwebtoken");

const createLOLGuide = async (req, res) => {
  try {
    console.log("req.body: ", req.body);
    const createdLOLGuide = await LOLGuide.create({
      ...req.body,
      //   user: req.user.id,
    });
    res.status(201).json(createdLOLGuide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const showLOLGuide = async (req, res) => {
  try {
    const allLOLGuide = await LOLGuide.find();
    if (allLOLGuide.length) {
      res.status(200).json(allLOLGuide);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createLOLGuide,
  showLOLGuide,
};
