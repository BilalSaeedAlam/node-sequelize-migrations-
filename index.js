const express = require("express");
const app = express()
const User = require("./models/user")

// Now using in Modal
// require("./models")

app.get("/", (req,res)=>{
    console.log("Hello World")
});

// Call Modal
 User.sync()
// User.sync({force:true})
// User.sync({alter:true})

// Drop Table
// User.drop()

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})