const brcypt = require('bcrypt');
const UserInfo = require("../model/UserInfo")
const userSignUp =async(req,res) =>{
    
    try{
        const {name,email,password,mobileNo} = req.body;
        // console.log("Request body:", req.body);
        const salt = await brcypt.genSalt(10);
        let encryptPassword = await brcypt.hash(password,salt);

        const newUser = UserInfo({
            name,
            email,
            password : encryptPassword,
            mobileNo
        })
        console.log("New user:", newUser);

    newUser.save((error, user) => {
      if (error) {
        console.log("Error saving user:", error);
        res.status(500).json({ error: "Error saving user" });
      } else {
        console.log("User saved:", user);
        res.status(200).send({ name: user.name });
      }
    });
  } catch (error) {
    console.log("Error in userSignUp:", error);
    res.status(500).json({ error: "Error in userSignUp" });
  }
}


module.exports = userSignUp;
