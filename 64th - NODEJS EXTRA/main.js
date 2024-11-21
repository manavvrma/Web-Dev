const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//middleware 1 - logger for an application
app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact");
});

// app.get("/blog/:slug", (req, res) => {
//   res.send(`hello blog - ${req.params.slug}`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
