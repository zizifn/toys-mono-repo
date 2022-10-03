const fs = require('fs');

const filename = process.argv[2];

if(filename){

    // const data = fs.readFileSync(filename);


    fs.readFile(filename, (err, data)=>{
        // console.log(data.toString().length);
        console.log(data.filter(value=>{
            // console.log(value);
            return value === 10
        }).length);
    })
}


// const buf = Buffer.from('hello world', 'ascii')