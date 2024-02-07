console.log(" hellow world");
const http = require('http');
http.createServer((req, res)=>{
res.write("<h1>hello world!</h1>");
res.end();
}).listen(3400);