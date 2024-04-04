const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    comment: {
      type: String,
    },
    organization: {
      type: String,
    },
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
  },
  { timestamps: true }
);

exports.Testimonial = mongoose.model("Testimonial", testimonialSchema);
