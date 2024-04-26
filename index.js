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
app.get("/users", userController.getUsers);
app.get("/users/:id", userController.getUserById);
app.post("/users", userController.postUsers);
app.delete("/users/:id", userController.deleteUserById);
app.patch("/users/:id", userController.updateUserById);
// QUERY ROUTE
app.get("/query", userController.queryUser);
// FINDERS ROUTE
app.get("/finders", userController.finderUser);
// GET SET VIRTUALS
app.get("/get-set-virtuals", userController.getSetVirtuals);
// Validation and Contraints
app.get("/validate", userController.validateUser);
// RAW QUERIES
app.get("/raw-quries", userController.rawQuries);
// RELATIONS
app.get("/one-to-one", userController.oneToOne);
app.get("/one-to-many", userController.oneToMany);
app.get("/many-to-many", userController.manyToMany);
// PARANOID SOFT DELETE
app.get("/paranoid", userController.deleteUser);
// LOADING
app.get("/loading", userController.loadingUser);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
