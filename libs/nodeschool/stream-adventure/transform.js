const { Transform } = require('readable-stream')
const transformer = new Transform({



    transform(chunk, enc, callback) {
        // ...
        this.push(chunk.toString().toUpperCase());
        console.log(this.count++);

        callback()
    }
})



process.stdin.pipe(transformer).pipe(process.stdout)