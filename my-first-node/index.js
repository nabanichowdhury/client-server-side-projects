const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("wowo honey signh");
});
app.listen(port, () => {
  console.log("listensing to port");
});
