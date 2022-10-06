const combine = require('stream-combiner');
const { Readable } = require('stream');
const { Writable } = require('stream');
const { Transform } = require('readable-stream');
const zlib = require('node:zlib');
const split2 = require('split2')

// rs.on("data", (chunk) => {
//     console.log(chunk);
// })
module.exports = function () {
    const data = new Map();
    const transformer = new Transform({
        transform(row, enc, callback) {
            if (row.length === 0) return callback()
            const chunk = JSON.parse(row)
            if (data.has(chunk.type)) {
                data.get(chunk.type).push(chunk.name)
            } else {
                data.set(chunk.type, [chunk.name])
            }
            callback();
        },
        flush(callback) {
            console.log(data);
            this.push(JSON.stringify([...data.entries()]))
            callback()
        }
    })

    return combine(
        // read newline-separated json,
        split2(),
        // group books into genres,
        transformer,
        zlib.createGzip()
        // then gzip the output
    );
};
