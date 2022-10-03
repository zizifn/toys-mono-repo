// import { readdir } from 'node:fs';
const readdir = require('fs').readdir;

const path = process.argv[2];
const filterExt = process.argv[3];

readdir(path, (err, data)=>{
    // console.log(data);
    if(err) console.error(err);

    const files = data.filter(file=> {
        const fileParts = file.split('.');
        if(fileParts.length==1){
            return false;
        }
        const lastPart = fileParts.at(-1);
        return lastPart === filterExt

    })

    // if()
    // console.log();
    files.forEach(file=>{
        console.log(file);
    })
})