const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // lastName: { type: String, required: true },
  mobileNo: { type: Number, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
},{timestamps:true});
const UserInfo = mongoose.model("UserInfo", signUpSchema);

module.exports = UserInfo;
