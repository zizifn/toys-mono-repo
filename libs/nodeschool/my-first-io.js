const fs = require('fs');

const filename = process.argv[2];

if(filename){

    const data = fs.readFileSync(filename);
    console.log(data.filter(value=>{
        // console.log(value);
        return value === 10
    }).length);

    // fs.readFile(filename, (err, data)=>{
    //     console.log(data.toString().length);
    // })
}


// const buf = Buffer.from('hello world', 'ascii')