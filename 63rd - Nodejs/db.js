const mongoose = require("mongoose");

// define mongo URL
const mongoURL = "mongodb://localhost:27017/hotels";

// establish connection
mongoose.connect(mongoURL);

// get defualt connection
const db = mongoose.connection;

// define event listeners

db.on("connected", () => {
  console.log("MongoDB connected");
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
db.on("error", (err) => {
  console.log("MongoDB disconnected", err);
});

// export the db connection

module.exports = db;
