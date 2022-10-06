

const { Readable } = require('stream')

const content = process.argv[2];

class MyStream extends Readable {
    _read() {
        this.push(content)
        this.push(null)
    }
}

new MyStream().pipe(process.stdout)