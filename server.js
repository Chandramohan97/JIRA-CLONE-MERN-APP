const app = require("express")();
require("dotenv").config();
const userController = require('./controller/userController')
const {mongoConnect} = require('./config/db')
// console.log(port);


const port = process.env.PORT || 8080;
mongoConnect();

app.get("/", (req, res) => {
  res.send("Api working");
});

app.listen(port, () => {
  console.log(`Server started on Port : ${port}`);
});
