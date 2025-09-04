const { Schema, model } = require("mongoose");
const GameAssetsSchema = require("./GameAssets");

const LOLGuideSchema = new Schema({
  title: {
    type: String,
  },
  champion: {
    type: GameAssetsSchema,
    required: true,
  },
  primaryRune: {
    type: GameAssetsSchema,
    required: true,
  },
  secondaryRune: {
    type: GameAssetsSchema,
    required: true,
  },
  firstSpell: {
    type: GameAssetsSchema,
    required: true,
  },
  secondSpell: {
    type: GameAssetsSchema,
    required: true,
  },
  firstItem: {
    type: GameAssetsSchema,
    required: true,
  },
  secondItem: {
    type: GameAssetsSchema,
    required: true,
  },
  thirdItem: {
    type: GameAssetsSchema,
    required: true,
  },
  fourthItem: {
    type: GameAssetsSchema,
    required: true,
  },
  fifthItem: {
    type: GameAssetsSchema,
    required: true,
  },
  sixthItem: {
    type: GameAssetsSchema,
    required: true,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const LOLGuide = model("LOLGuide", LOLGuideSchema);
module.exports = LOLGuide;
