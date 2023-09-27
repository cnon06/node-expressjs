const express = require("express");
const router = express.Router();

router.use("/blogs/:id", (req, res) => {
  var path = require("path");

  var x = path.join(__dirname, "../views/users", "blog-details.html");

  res.sendFile(x);
});

router.use("/blogs", (req, res) => {
  var path = require("path");

  var x = path.join(__dirname, "../views/users", "blogs.html");

  res.sendFile(x);
});

router.use("/", (req, res) => {
  var path = require("path");

  var x = path.join(__dirname, "../views/users", "index.html");

  res.sendFile(x);
});

module.exports = router;
