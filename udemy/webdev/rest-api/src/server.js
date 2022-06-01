const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.js");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db.js");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 3000;

connectDB();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("OK!");
});

app.use("/api/notes", routes);

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
