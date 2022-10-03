const http = require('http')
const fs = require('fs');
 const port = process.argv[2];
//  const filepah = process.argv[3];

 const server = http.createServer(
    (req, res)=>{
        if(req.method === 'POST'){

            // req.pipe(
            //     map((chunk)=> chunk.toString().toUpperCase())
            // ).pipe(res);
            console.log('ddd');
            let data = '';
            req.on('data', chunk => {
              data += chunk;
            });
            req.on('end', () => {
                console.log(data);
            //   console.log(JSON.parse(data).todo); // 'Buy the milk'
              res.end(data.toUpperCase());
            });
        }
        // fs.createReadStream(filepah).pipe(res);
        // res.end('hello')
    }
 )


 server.listen(port).on('error', (er)=>{
    console.log(er);
 });