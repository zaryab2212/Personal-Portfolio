const express = require("express");
const { upload } = require("../multer/multer");
const { userLogin } = require("../controllers/auth");
const { authorized } = require("../controllers/middleware/authorized");
const {
  addProject,
  getProjects,
  UpdateProject,
  removeProject,
} = require("../controllers/project");
const router = express.Router();

router.post("/add", authorized, upload, addProject);
router.get("/", getProjects);
router.patch("/:id", authorized, upload, UpdateProject);
router.delete("/:id", authorized, upload, removeProject);
// router.post("/register", userRegiste);

module.exports = router;
