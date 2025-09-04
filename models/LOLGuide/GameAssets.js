const { Schema, model } = require("mongoose");

const GameAssetsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    requried: true,
  },
});

module.exports = GameAssetsSchema;
