const trumpet = require('trumpet')
const { Transform } = require('readable-stream')
const fs = require('fs')
const tr = trumpet()

const upcase = new Transform({
    transform(chunk, enc, callback) {
        // ...
        this.push(chunk.toString().toUpperCase());
        callback()
    }
})

const loud = tr.select('.loud');
var rs = loud.createReadStream().pipe(upcase).pipe(loud.createWriteStream())

process.stdin.pipe(tr).pipe(process.stdout)