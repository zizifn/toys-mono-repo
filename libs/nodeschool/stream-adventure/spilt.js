const { Transform } = require('readable-stream')
const split2 = require('split2')
const through2 = require('through2')
const fs = require('fs')

class MyCustomTransform extends Transform {

    constructor(options) {
        // Calls the stream.Writable() constructor.
        super(options);
        this.count = 0;
        // ...
    }

    _transform(chunk, enc, callback) {
        // ...
        // console.log(chunk);
        let contents = chunk.toString().split('\n');
        if (contents.at(-1) === '') {
            contents.pop();
        }

        for (const content of contents) {

            if (content !== '') {
            }
            this.count += 1;
            // console.log(this.count);
            if (this.count % 2 === 0) {
                // this.push(`${content.toUpperCase()}\n`);
                console.log(content.toUpperCase())
            } else {
                // this.push(`${content.toLowerCase()}\n`);
                console.log(content.toLowerCase())
            }
        }
        callback()
    }
}

// let count = 0;
// process.stdin
//     .pipe(split2())
//     .pipe(through2(function (content, _, next) {
//         count += 1;
//         if (count % 2 === 0) {
//             // this.push(`${content.toString().toUpperCase()}\n`);
//             console.log(content.toString().toUpperCase())
//         } else {
//             // this.push(`${content.toString().toLowerCase()}\n`);
//             console.log(content.toString().toLowerCase())
//         }
//         // this.push(content)
//         next();
//     }))

// process.stdin.pipe(process.stdout)
process.stdin.pipe(new MyCustomTransform())

// let chunk = '';
// process.stdin.on('data', (chunk1) => {
//     chunk += chunk1.toString()
// })
// process.stdin.on('end', () => {
//     console.log(chunk);

// })

// process.stdin
//     .pipe(split2())
//     .pipe(tr)
//     .pipe(process.stdout)
