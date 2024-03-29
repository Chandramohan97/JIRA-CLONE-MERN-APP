const mongoose = require("mongoose");
require("dotenv").config();
const md5 = require("md5");
const { URI, PASSWORD } = process.env;
const dbURI = URI.replace(`<password>`, PASSWORD);
// const Login = require("../model/model");
// import userLogin from "../model/userLogin";

mongoose.set("strictQuery",false);

const mongoConnect = async() =>{
  try{
    const conn = await mongoose.connect(dbURI,{useNewUrlParser: true,useUnifiedTopology: true});
    console.log("Database connected");
  }catch(error){
    console.log(error)
  }
}

  module.exports = {mongoConnect};