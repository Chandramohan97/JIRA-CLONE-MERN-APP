const userRoute = require("express").Router();
const userSignUp = require("../controller/userController");
const bodyParser = require('body-parser');

userRoute.use(bodyParser.json())

userRoute.route("/signUp").post(userSignUp);

module.exports = userRoute; 
