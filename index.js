const express = require("express");
const app = express();

var path = require("path");

var public = path.join(__dirname, "public");

app.use("/libs", express.static("node_modules"));

app.use("/static", express.static(public));

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use("/admin", adminRoutes);
app.use(userRoutes);

// app.use("/blogs/:id", (req, res) => {
//   var path = require("path");

//   var x = path.join(__dirname, "views\\users", "blog-details.html");

//   res.sendFile(x);
// });

// app.use("/blogs", (req, res) => {
//   var path = require("path");

//   var x = path.join(__dirname, "views\\users", "blogs.html");

//   res.sendFile(x);
// });

// app.use("/", (req, res) => {
//   var path = require("path");

//   var x = path.join(__dirname, "views\\users", "index.html");

//   res.sendFile(x);
// });

app.listen(3000, () => {
  console.log("listening on port 3000");
});
