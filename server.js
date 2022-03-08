// lib
const express = require('express')
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const path  = require('path')
const { sign } = require('crypto')


app.use(express.static(path.join(__dirname + "/src")));



server.listen(8000, () =>{
    console.log('Listening on port 8000')
})

io.on('connection', (socket) => {
    console.log('user login')
    socket.on('on-chat', data => {
        io.emit('user-chat', data)
    })
})

io.sockets.on('connection', function (socket) {
    console.log("New user connected:", socket.client.conn.server.clientsCount);
    socket.on('clientsCount', function(count) {
        socket.emit('Hello', count)
    })
  });
