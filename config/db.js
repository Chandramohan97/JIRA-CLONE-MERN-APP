const mongoose = require("mongoose");
require("dotenv").config();
const md5 = require("md5");
const { URI, PASSWORD } = process.env;
const dbURI = URI.replace(`<password>`, PASSWORD);
// const Login = require("../model/model");
// import userLogin from "../model/userLogin";

mongoose.set("strictQuery",false);

const mongoConnect = mongoose.connect(dbURI, {
    useNewUrlParser: true, // uses the new parser engine instead of the old one.
    useUnifiedTopology: true, //useUnifiedTopology ensures efficient connectivity between database and application.
    // useCreateIndex : true//uses Index to classify collections in a database for efficient query.Deprecated in the current version of mongoose
    // useFindAndModify: false, // the method is deprecated, hence setting it to false and making the code future-proof.Deprecated in the current version of Mongoose.
  })
  .then(() => console.log("Connected to Database")) //Connected to Database,not collections
  .catch((err) => console.log(err));

  module.exports = mongoConnect;