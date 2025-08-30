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

module.exports = {
  createLOLGuide,
};
