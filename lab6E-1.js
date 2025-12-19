const fs = require('fs');

fs.copyFile('download.jpg','backupphoto.jpg',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("copied");
})