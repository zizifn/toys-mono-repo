const http = require('http')
const fs = require('fs')
const { Transform } = require('readable-stream')

const server = http.createServer(function (req, res) {
    req.pipe(new Transform({
        transform(chunk, enc, callback) {
            // ...
            this.push(chunk.toString().toUpperCase());

            callback()
        }
    })).pipe(res)
});
server.listen(process.argv[2])