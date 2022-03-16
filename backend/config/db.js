const mongoose = require("mongoose");
const config = require("config");
const url = config.get("MONGOURI");

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
