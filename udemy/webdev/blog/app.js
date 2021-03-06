const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const _ = require("lodash");
const app = express();

const blogPost = [];
const welcomePageText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const aboutPageText =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const contactPageText =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";

app.set("view engine", "ejs");
app.set("view cache", false);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  const title = "EJS Blog | Home";
  const page = "Home";
  res.render("home", {
    webTitle: title,
    contentText: welcomePageText,
    pageHeader: page,
    blogs: blogPost,
  });
});

app.get("/about", (req, res) => {
  const title = "EJS Blog | About";
  const page = "About";
  res.render("about", {
    webTitle: title,
    contentText: aboutPageText,
    pageHeader: page,
  });
});

app.get("/contact", (req, res) => {
  const title = "EJS Blog | Contact";
  const page = "Contact";
  res.render("contact", {
    webTitle: title,
    contentText: contactPageText,
    pageHeader: page,
  });
});

app.get("/compose", (req, res) => {
  const title = "EJS Blog | Compose";
  const page = "Compose";
  res.render("compose", {
    webTitle: title,
    pageHeader: page,
  });
});

app.get("/post", (req, res) => {
  const title = "EJS Blog | Post";
  const page = "Post";
  res.render("post", {
    data: [],
    webTitle: title,
    pageHeader: page,
  });
});

app.get("/post/:title", (req, res) => {
  const temp = {};
  blogPost.forEach((post) => {
    const storedPostTitle = _.lowerCase(post.title);
    const paramTitle = _.lowerCase(req.params.title);

    if (storedPostTitle.includes(paramTitle)) {
      temp.title = post.title;
      temp.content = post.content;
    } else {
      res.redirect("/");
    }
  });

  const title = `EJS Blog | Post`;
  return res.render("post", {
    webTitle: title,
    data: temp,
  });
});

app.post("/", (req, res) => {
  const blogObj = {};
  blogObj.title = req.body.blogTitle;
  blogObj.content = req.body.blogContent;
  blogPost.push(blogObj);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
