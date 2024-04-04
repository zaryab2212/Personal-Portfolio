const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Email is required"],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
    isAdmin: {
      type: Boolean,
      require: [true, "Password is required"],
      default: false,
    },
  },
  { timestamps: true }
);

exports.User = mongoose.model("User", userSchema);
