const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    images: {
      type: [String],
    },
    name: {
      type: String,
    },
    technologies: {
      type: [String],
    },
    feature: {
      type: [String],
    },
    goal: {
      type: String,
    },
    gitRepo: {
      type: String,
    },
    projectLink: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

exports.Project = mongoose.model("Project", projectSchema);
