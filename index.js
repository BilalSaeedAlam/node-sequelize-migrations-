const express = require("express");
const app = express()

require("./models")

app.get("/", (req,res)=>{
    console.log("Hello World")
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})