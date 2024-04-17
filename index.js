const express = require("express");
var bodyParser = require("body-parser");
require("./models");
var userController = require("./controllers/userController");
const app = express();

app.use(bodyParser.json());
// In case when you you use sync in main Modal index file
// require("./models/user")
// require("./models/contact")

// In case when you call all Modals in this file like in bottom
// const User = require("./models/user")
// const Contact = require("./models/contact")

// Now using in Modal
// require("./models")

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hello World.");
});

//**
// Call Modal
// **

// User.sync()
// Contact.sync()
// User.sync({force:true})
// User.sync({alter:true})

// **
// Drop Table
// **
// User.drop()

app.get("/add", userController.addUser);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
