// 2) Use fs.readFileSync() to read info.txt and print the content, Compare execution with the 
// asynchronous version. (A) 
const fs = require('fs');

try{
   data =  fs.readFileSync('hi.txt','utf-8');//formate
   console.log(data.toString());
}catch(err){
    console.log(err);
}