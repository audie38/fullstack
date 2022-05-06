const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const port = process.env.PORT || 5000;
const cors = require("cors");

connectDB();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("OK!");
});

app.use("/api/products", productRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on Port ${port}`.yellow.bold);
});
