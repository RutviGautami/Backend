const fs = require('fs');
fs.watch('.',(eventType,filename)=>{
    if(changes){
        console.log("Event:",eventType," filename:",filename);
    }
})