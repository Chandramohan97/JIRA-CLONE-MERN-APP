const { Passport } = require("passport");

const app = require("express")();
require("dotenv").config();

const port = process.env.PORT || 8080;
console.log(port);

console.log(faker);
app.listen(port, () => {
  console.log(`Server started on Port : ${port}`);
});
