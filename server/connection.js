const mongoose = require("mongoose");

exports.db = async () => {
  try {
    // await mongoose.connect(process.env.MOGO_URI);
    await mongoose.connect(
      "mongodb+srv://zaryab2212:Hangover123@portfolio.ctz5rvs.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Db is connected");
  } catch (error) {
    console.log(error);
  }
};
