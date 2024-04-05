const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res, next) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      email: req.body.email,
      password: hashed,
    });
    const { _id, email, password } = user._doc;
    res.status(201).json({ _id, email, isAdmin });

    // await user.save();
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    const verifyUser = await User.findOne({ email: req.body.email });
    if (!verifyUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const verfyPass = await bcrypt.compare(
      req.body.password,
      verifyUser.password
    );

    if (!verfyPass) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = await jwt.sign(
      { userId: verifyUser._id, isAdmin: verifyUser.isAdmin },
      process.env.JWT_SEC
    );

    const { email, isAdmin } = verifyUser;
    res
      .status(201)
      .cookie("token", token, { httpOnly: true })
      .json({ email, isAdmin });
  } catch (error) {
    return res.status(400).json({
      error,
      message: "An internal Server Error occurd please try again  later",
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const verifyUser = await User.findById(req.user);
    if (!verifyUser) {
      return res.status(401).json({ message: "please login first" });
    }

    const { email, isAdmin } = verifyUser;
    res.status(201).json({ email, isAdmin });
  } catch (error) {
    return res.status(400).json({
      error,
      message:
        "An internal Server Error occurd to validate user please try again  later",
    });
  }
};

exports.logOutUser = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", "")
      .json({ message: "User logged out succesfuly" });
  } catch (error) {
    res.status(400).json({ error, message: "User logged out succesfuly" });
  }
};
