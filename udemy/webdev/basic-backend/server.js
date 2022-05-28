const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("OK!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
