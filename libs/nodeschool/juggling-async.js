const http = require('http')

const urls = process.argv.slice(2, 5);

// console.log(urls);

const map = new Map();

for (const url of urls) {
    map.set(url,'');
    http.get(url, (res) => {
        let datas = '';
        res.setEncoding('utf8')
        res.on('data', (chunk) => {
            // datas.push()
            datas += chunk
            // console.log(chunk.toString());
        }).on('end', () => {
            // console.log(datas.length);
            map.set(url, datas);
            // console.log(map.values());
            const reps = Array.from(map.values()).filter(Boolean);
            // console.log(reps);
            if (reps.length === 3) {
                // .forEach(value => console.log(value));
                for (const value of map.values()) {
                    console.log(value);
                }
            }
        })
    })
}
