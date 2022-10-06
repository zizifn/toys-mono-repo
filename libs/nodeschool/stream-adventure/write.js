

const { Writable } = require('stream')
class MyCustomWritable extends Writable {
    _write(chunk, encoding, callback) {
        // ...
        console.log(`writing: ${chunk.toString()}`)

        callback();
    }
}

process.stdin.pipe(new MyCustomWritable())
