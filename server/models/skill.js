const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    images: {
      type: String,
    },
    name: {
      type: String,
    },
    stars: {
      type: Number,
      min: 1,
      max: 5,
      default: 4,
    },
  },
  { timestamps: true }
);

exports.Skill = mongoose.model("Skill", skillSchema);
