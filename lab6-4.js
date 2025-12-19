const fs = require('fs');

console.log("Start");

fs.appendFile('hi.txt','hi by append',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("success");
})

console.log("End");