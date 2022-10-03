const http = require('http')
const fs = require('fs');
 const port = process.argv[2];
 const filepah = process.argv[3];

 const server = http.createServer(
    (req, res)=>{
        fs.createReadStream(filepah).pipe(res);
        // res.end('hello')
    }
 )


 server.listen(port).on('error', (er)=>{
    console.log(er);
 });