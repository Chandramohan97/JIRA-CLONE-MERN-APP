const userRoute = require("express").Router();
const userController = require("../controller/userController");
// const bodyParser = require('body-parser');


userRoute.route("/").post(userController);

module.exports = userRoute; 
