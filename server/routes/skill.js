const express = require("express");
const { upload } = require("../multer/multer");
const { authorized } = require("../controllers/middleware/authorized");
const {
  getSkills,
  removeSkill,
  addSkill,
  updateSkill,
} = require("../controllers/skill");
const router = express.Router();

router.get("/", getSkills);
router.post("/", authorized, upload, addSkill);
router.delete("/:id", authorized, upload, removeSkill);
router.patch("/:id", authorized, upload, updateSkill);

module.exports = router;
