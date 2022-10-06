const WebSocket = require('ws')
const { Readable } = require('stream')
const ws = new WebSocket('ws://localhost:8099')
const stream = WebSocket.createWebSocketStream(ws)


class MyStream extends Readable {
    _read() {
        this.push("hello\n")
        this.push(null)
    }
}

new MyStream().pipe(stream).pipe(process.stdout)
