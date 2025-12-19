const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About Page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Page</h1>")
})
app.get("/details",(req,res)=>{
    res.send("<h1>Details Page</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>")
})
app.use((req,res)=>{
    res.status(404).send("Error Page Not Found")
})

app.listen(3000,()=>{
    console.log("Running in port 3000");
})