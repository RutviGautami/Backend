// 4) Write a program that parses the given URL, Print protocol, hostname, pathname, and query 
// parameters separately. (A) 
const url = new URL("https://example.com/page?key1=value1&key2=value2");
console.log(`Hostname: ${url.hostname}`);
console.log(`Protocol: ${url.protocol}`);
console.log(`PathName: ${url.pathname}`);
url.searchParams.forEach((value,key)=>{
    console.log(`\t${key}: ${value}`)
});
