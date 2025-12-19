const { Console } = require('console');
const fs = require('fs');

console.log("Start");

fs.mkdir('../my-data',(err)=>{
    if(err){
        if(err.code === 'EEXIST'){
            console.log("already exist..");
        }
        console.log(err);
        return;
    }
    console.log("success");
})

console.log("End");