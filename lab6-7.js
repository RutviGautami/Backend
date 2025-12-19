const fs = require('fs');

console.log("Start");

fs.readdir('.',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

console.log("End");