const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const todoItems = [];

app.set("view engine", "ejs");
app.set("view cache", false);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let title = "EJS TodoList";
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = new Date().toLocaleDateString("en-US", options);

  res.render("list", {
    webTitle: title,
    kindOfDay: day,
    listOfTodos: todoItems,
  });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  todoItems.push(item);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
