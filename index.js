const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 8080;
// console.log(port);

app.use("/", (req, res) => {
  res.send("API running fine");
});

app.listen(port, () => {
  console.log(`Server started on Port : ${port}`);
});
