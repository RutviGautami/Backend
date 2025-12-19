// 5) Create a new URL object with base, then append pathname and query, also print the final 
// URL. (B) 
newurl = new URL("https://example.com");
newurl.pathname = "/page";
newurl.searchParams.append("key1", "value1");
newurl.searchParams.append("key2", "value2");
console.log(`URL: ${newurl.toString()}`);
