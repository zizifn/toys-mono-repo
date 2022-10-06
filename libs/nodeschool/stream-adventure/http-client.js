const http = require('http')


const options = { method: 'POST' }
const req = http.request('http://localhost:8099', options, (res) => {
    /* Do something with res*/

    res.pipe(process.stdout)
})

process.stdin.pipe(req)