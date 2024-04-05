const jwt = require("jsonwebtoken");

exports.authorized = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "Please login first" });
    }

    const verify = await jwt.verify(token, process.env.JWT_SEC);

    if (!verify) {
      return res
        .status(401)
        .json({ message: "Please Login Again. Token seems incorrect" });
    }

    req.user = verify.userId;
    req.isAdmin = verify.isAdmin;

    next();
  } catch (error) {
    return res.status(400).json({
      error,
      message:
        "Internal Server Error to Authenticate user. Please try again later",
    });
  }
};
