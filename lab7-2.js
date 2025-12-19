const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html")
    if(req.url === '/'){
        res.statusCode = 202;
        res.end("<h1>Home page</h1>");
    }
    else if(req.url === '/about'){
        res.statusCode = 202;
        res.end("about page");
    }    
    else if(req.url === '/contact'){
        res.statusCode = 202;
        res.end("contact page");
    }
    else if(req.url === '/page1'){
        res.statusCode = 202 ;
        res.end("page1");
    }
    else if(req.url === '/page2'){
        res.statusCode = 202;
        res.end("page2");
    }
    else{
        res.statusCode = 404;
        res.end("page not found");
    }
})

server.listen(3000,()=>{
    console.log("Running in port 3000");
})