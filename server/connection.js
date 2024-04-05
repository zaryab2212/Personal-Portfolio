const mongoose = require("mongoose");

exports.db = async () => {
  try {
    // await mongoose.connect(process.env.MOGO_URI);
    await mongoose.connect(process.env.MOGO_URI);
    console.log("Db is connected");
  } catch (error) {
    console.log(error);
  }
};
