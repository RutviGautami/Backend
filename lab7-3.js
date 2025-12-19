const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html")
    if(req.url === '/'){
        res.statusCode = 202;
        res.end("<h1>Home page</h1>");
    }
    else if(req.url === '/about'){
        res.statusCode = 202;
        fs.readFile("about.txt",(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        });
    }    
    else if(req.url === '/contact'){
        res.statusCode = 202;
        fs.readFile("contact.txt",(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        });
    }
    else{
        res.statusCode = 404;
        res.end("page not found");
    }
})

server.listen(3000,()=>{
    console.log("Running in port 3000");
})