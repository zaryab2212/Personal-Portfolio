const { Testimonial } = require("../models/testimonial");
const { cloudinaryUpload } = require("../utils/cloudinaryUpload");

exports.addTestimonial = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const result = await cloudinaryUpload(req.files);

    const testimonial = await Testimonial.create({
      ...req.body,
      image: result[0],
    });

    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({
      error,
      message: "new testimonial is not added some internal error occured",
    });
  }
};

exports.getTestimonial = async (req, res, next) => {
  try {
    const testimonial = await Testimonial.find();

    res.status(200).json({
      success: true,
      message: "All skills fetched successfully",
      testimonial,
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "Error orrurd gettin all testimonial",
      success: false,
    });
  }
};

exports.removeTestimonial = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "skill removed Succesfully",
      testimonial,
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "Error orrur dell testimonial skill",
      success: false,
    });
  }
};

exports.UpdateTestimonial = async (req, res, next) => {
  try {
    // const imgs = req.files;

    if (!req.isAdmin) {
      return res.status(401).json({
        message: "You are not an admin. Please login with admin account first",
      });
    }

    const result = await cloudinaryUpload(req.files);

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { ...req.body, images: result[0] },
      {
        new: true,
      }
    );
    res.status(200).json({
      success: true,
      message: "testimoial updated Succesfully",
      testimonial,
    });
  } catch (error) {
    res.status(400).json({
      error,
      message: "an internal server Error orrur Updating testimonial skill",
      success: false,
    });
  }
};
