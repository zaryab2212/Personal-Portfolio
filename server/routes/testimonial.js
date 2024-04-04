const express = require("express");
const { upload } = require("../multer/multer");
const { authorized } = require("../controllers/middleware/authorized");

const {
  addTestimonial,
  getTestimonial,
  removeTestimonial,
  UpdateTestimonial,
} = require("../controllers/testimonial");
const router = express.Router();

router.get("/", getTestimonial);
router.post("/add", authorized, upload, addTestimonial);
router.delete("/:id", authorized, upload, removeTestimonial);
router.patch("/:id", authorized, upload, UpdateTestimonial);

module.exports = router;
