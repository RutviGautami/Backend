// 9) Write a program that checks if the file config.json exists in the current directory using 
// fs.existsSync() and prints the result. (B) 
const fs = require('fs');
try{
    if(fs.existsSync('hi.txt')){
        console.log("exist");
    }
}catch(err){
    console.log(err);
}
