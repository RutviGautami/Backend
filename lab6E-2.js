const fs = require('fs');

console.log("Start");

fs.readFile('hi.txt',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    fs.appendFile('hi.txt',data.toString(),(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("success");
    })
    console.log(data.toString());
})

console.log("End");