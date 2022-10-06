
const duplex2 = require('duplexer2')
const { Writable } = require('stream')
module.exports = function (counter) {
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side

    const map = new Map();
    class MyCustomWritable extends Writable {

        constructor(options) {
            super(options);
            // ...
        }
        _write(chunk, encoding, callback) {
            // console.log(chunk.country);
            // ...
            if (map.has(chunk.country)) {
                const value = map.get(chunk.country);
                map.set(chunk.country, value + 1);
            } else {
                map.set(chunk.country, 1);
            }
            callback();
        }

        _final() {
            // console.log(`writing: ${JSON.stringify()}`)
            counter.setCounts(Object.fromEntries(map.entries()))
        }

    }

    const ws = new MyCustomWritable({
        objectMode: true
    });




    return duplex2({ objectMode: true }, ws, counter)
}