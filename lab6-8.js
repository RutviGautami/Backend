// 8) Write a program that copies a file named source.txt to a new file named backup.txt using 
// fs.copyFile(). (C) 
const fs = require('fs');

fs.copyFile('source.txt','backup.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("copied");
})