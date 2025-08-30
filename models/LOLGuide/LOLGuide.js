const { Schema, model } = require("mongoose");

const LOLGuideSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
//   username: {
//     type: Schema.TypesObjectId,
//     ref: "User",
//   },
});

const LOLGuide = model("LOLGuide", LOLGuideSchema);
module.exports = LOLGuide;
