const concat = require('concat-stream')


process.stdin.pipe(concat(
    /**
     *
     * @param {Buffer} chunk
     */
    (chunk) => {
        console.log([...chunk.toString()].reverse().join(''))
    }
))