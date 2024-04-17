const express = require("express");
const app = express()
require("./models")


// In case when you you use sync in main Modal index file
// require("./models/user")
// require("./models/contact")

// In case when you call all Modals in this file like in bottom
// const User = require("./models/user")
// const Contact = require("./models/contact")

// Now using in Modal
// require("./models")

app.get("/", (req,res)=>{
    console.log("Hello World")
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

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})