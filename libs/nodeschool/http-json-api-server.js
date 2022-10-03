const http = require('http')
const { URL } = require('url')
const fs = require('fs');


const port = process.argv[2];
//  const filepah = process.argv[3];

const server = http.createServer(
    (req, res) => {
        const url = new URL(req.url, 'http://127.0.0.1')
        console.log(url);
        // const param = req.url.split('')
        const str = url.searchParams.get('iso');
        const date = new Date(str);


        res.writeHead(200, { 'Content-Type': 'application/json' })

        if (url.pathname === '/api/parsetime') {
            const obj = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            }
            res.end(JSON.stringify(obj))
        }
        if (url.pathname === '/api/unixtime') {
            const obj = {
                "unixtime":date.getTime()
            }
            res.end(JSON.stringify(obj))
        }
        // res.end('1')
    }
)


server.listen(port).on('error', (er) => {
    console.log(er);
});