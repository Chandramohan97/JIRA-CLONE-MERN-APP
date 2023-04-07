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
    console.log(conn);
  }catch(error){
    console.log('Error')
  }
}

  module.exports = {mongoConnect};