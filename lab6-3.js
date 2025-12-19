const fs = require('fs');

console.log("Start");

fs.writeFile('output.txt','hello from here',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("written");
})
console.log("end");

// console.log("Start");
// try{
//     fs.writeFileSync('output.txt','hello from 2');
//     console.log("written");
// }catch(err){
//     console.log(err);
// }
// console.log("End");