const fs = require('fs');

console.log("Start");

fs.readdir('.',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let i = 0;
    while(data[i]!=null){
        console.log("name: ",data[i]);
        i++;
    }
})

console.log("End");