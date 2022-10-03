const net = require('node:net');
const port = process.argv[2];
const server = net.createServer((socket) => {
  // 'connection' listener.
//   console.log('client connected');
//   c.on('end', () => {
//     console.log('client disconnected');
//   });
//   c.write('hello\r\n');
//   c.pipe(c);
const d1 = new Date();
console.log(d1.toISOString());

socket.end(`${d1.getFullYear()}-${(d1.getMonth() +1).toString().padStart(2,'0') }-${d1.getDate().toString().padStart(2,'0')} ${d1.getHours().toString().padStart(2,'0')}:${d1.getMinutes().toString().padStart(2,'0')}\n`);
});
server.on('error', (err) => {
  throw err;
});
server.listen(port, () => {
  console.log('server bound');
});


// console.log(d1.toLocaleString());