const path = require('path');
const os = require('os');

// 1) Write a Node.js program that prints the directory name, file name, file extension, and full 
// path of the code file. (A) 

console.log("Dirname: "+ path.basename (__dirname));
console.log("Filename: "+ path.basename (__filename));
console.log("File extention"+ path.extname(__filename));
console.log("path of code: "+ __filename);

// 2) Create a program that joins "users", "arjun", "documents", "project" into a single path using 
// path.join(). (A)

console.log(path.join("users", "arjun", "documents", "project"));

// 3) Write a program to fix the path="//folder//subfolder////file.txt" using path.normalize() and 
// display the clean normalised path. (A) 

console.log(path.normalize("//folder//subfolder////file.txt"));

// 4) Write a program that checks whether the given path is absolute or relative paths. (A) 

console.log(path.isAbsolute("//folder//subfolder////file.txt"));

// 5) Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js" 
// into an absolute path. Print the final resolved path. (A) 

console.log(path.resolve("folder", "subfolder", "app.js"));

// 6) Write a program that prints: (A) 
// • Operating system name 
// • Release version 
// • Platform 
// • Architecture 

console.log(os.type());
console.log(os.version());
console.log(os.platform());
console.log(os.arch());

// 7) Write a program that prints the total memory and free memory in GB (B) 

console.log(os.totalmem()/Math.pow(1024,3)+" GB");
console.log(os.freemem()/Math.pow(1024,3)+" GB");

// 8) Write a Node.js program that prints details about the currently logged-in user in operating 
// system. (B) 

console.log(os.userInfo());

// 9) Write a program that prints how long the system has been running (uptime) in seconds and in 
// hours. (B) 

console.log(os.uptime()/3600 +" hours");

// 10) Write a Node.js program that prints: (B) 
// • Number of CPU cores 
// • Model name of each core 
// • Network interface details

const cpus = os.cpus();
console.log(cpus);
cpus.forEach((cpu, index) => {
  console.log(`Core ${index + 1}: ${cpu.model}`);
});
console.log(os.networkInterfaces());
