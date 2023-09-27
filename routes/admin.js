const express = require("express");
const router = express.Router();

router.use("/blog/create", (req, res) => {
  var path = require("path");

  var x = path.join(__dirname, "../views/admin", "blog-create.html");

  res.sendFile(x);
});

router.use("/blogs/:blogid", (req, res) => {
  var path = require("path");

  var x = path.join(__dirname, "../views/admin", "blog-edit.html");

  res.sendFile(x);
});

router.use("/blogs", (req, res) => {
  var path = require("path");

  var x = path.join(__dirname, "../views/admin", "blog-list.html");

  res.sendFile(x);
});

module.exports = router;
