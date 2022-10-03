const http = require('http')

const url  = process.argv[2];

http.get(url, (res) => {


    let datas = '';
    res.setEncoding('utf8')
    res.on('data', (chunk)=>{
        // datas.push()
        datas += chunk
        // console.log(chunk.toString());
    }).on('end', ()=>{
        console.log(datas.length);
        console.log(datas)
    })
})