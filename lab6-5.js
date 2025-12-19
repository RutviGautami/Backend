const fs = require('fs');

console.log("Start");

fs.unlink('temp.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("success");
})

console.log("End");