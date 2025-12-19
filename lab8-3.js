const express = require("express");
const fs = require('fs');

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.get("/about",(req,res)=>{
    fs.readFile("about.txt",(err,data)=>{
                if(err){
                    res.send(err);
                }
                res.send(data);
            });
})
app.get("/contact",(req,res)=>{
    fs.readFile("contact.txt",(err,data)=>{
                if(err){
                    res.send(err);
                }
                res.send(data);
            });
})
app.get("/details",(req,res)=>{
    res.send("<h1>Details Page</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>")
})

app.post('/register',(req,res)=>{
    const {name,email,phone} = req.body;
    res.send(`name : ${name},email : ${email},phone : ${phone}`)
})

app.get('/user/:id',(req,res)=>{
    res.send(req.params.id);
})

app.get('/user',(req,res)=>{
    res.send(req.query);
})

app.listen(3000,()=>{
    console.log("Running in port 3000");
})