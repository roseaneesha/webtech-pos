const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  empId: { type: Number, required: true },
  password: { type: String, required: true },
  empName: { type: String, required: true },
});

module.exports = User = new mongoose.model("user", UserSchema);
