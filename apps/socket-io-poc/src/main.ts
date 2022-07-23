/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { join } from 'path';
import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';
import { Server } from "socket.io";
import HttpsProxyAgent from 'https-proxy-agent';
import url from 'url';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const options = url.parse("http://127.0.0.1:1081");
const agent = HttpsProxyAgent(options);

const dataSocket = new WebSocket(`wss://ws.finnhub.io?token=${process.env.finnhub_token}`,
{
  agent: agent,
  timeout: 100000,
});

// Connection opened -> Subscribe
dataSocket.addEventListener('open', function (event) {
  dataSocket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}));
  dataSocket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:ETHUSDT'}));

  console.log("finnhub say hello");
});
dataSocket.addEventListener('error', function (event) {
  // socket.send('Hello Server!');
  console.log(event);
});


// dataSocket.send()


app.use(express.static(join(__dirname,'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to socket-io-poc!' });

  // Listen for messages
});

io.on('connection', (socket1) => {
  console.log('a user connected');
  dataSocket.addEventListener('message', emitMarketData);
  socket1.on('join', (room, callback)=>{
    console.log("rooms", room);
    socket1.join(room);
    callback?.({
      status: "ok"
    });
  });
  socket1.on('leave', (room)=>{
    console.log("leave", room);
    socket1.leave(room);
  });
  socket1.on("disconnect", (reason) => {
    // dataSocket.removeEventListener('message', emitMarketData);
  });

  // socket1.rooms.forEach(room => {
  //   socket1.leave(room);
  // })

  socket1.conn.on("drain", () => {
    // called when the write buffer is drained
    // socket1.disconnect(true);
    console.log("drain", socket1.id);
  });
});

const port = process.env.port || 3333;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

function emitMarketData(event) {
  // console.log('Message from server ', event.data);
  // io.to()
  console.log("ddd", event.data);

  // await new Promise((resolve, reject) => setTimeout(resolve, 10000));
  // await new Promise(r => setTimeout(r, 2000)).then(() => {console.log("inside timeout then");});
  let add = 0;
  for (let index = 0; index < 10000000000; index++) {
    add += index;
  }
  console.log("after calc", add , "bufferedAmount   ", dataSocket.bufferedAmount);
  const marketDatas = JSON.parse(event.data)?.data || [];

  console.log("count is ", marketDatas.length);

  const rooms = new Map();
  for (const marketData of marketDatas) {
    rooms.set(marketData.s, marketData);
  }
  for (const [room, marketData] of rooms.entries()) {
    io.in(room).volatile.emit('quote', marketData)
  }
  // console.log();
  const sids = io.of("/").adapter.sids;
  console.log(sids);
}