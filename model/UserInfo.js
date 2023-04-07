const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  mobileNo: { type: Number, required: true, unique: true },
});
const UserInfo = mongoose.model("UserInfo", loginSchema);

module.exports = UserInfo;
