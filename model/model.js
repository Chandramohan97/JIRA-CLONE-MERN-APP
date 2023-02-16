const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const signUpSchema = new mongoose.Schema({
  firstName: { type: Alph, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  mobileNo: { type: Number, required: true, unique: true },
});
const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
