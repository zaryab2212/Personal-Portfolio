const express = require("express");
const {
  userLogin,
  userRegister,
  getUser,
  logOutUser,
} = require("../controllers/auth");
const { authorized } = require("../controllers/middleware/authorized");
const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.get("/", authorized, getUser);
router.get("/logout", authorized, logOutUser);

module.exports = router;
