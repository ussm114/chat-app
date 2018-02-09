const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);  // conf. server to user socket io

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.emit('newMessage', {
    from: 'as',
    text: 'asdfadf',
    createdAt: 1234
  });

  socket.on('createMessage', (message) => {
    console.log('message: ', message);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // socket.on('createMessage', (message) => {
  //   socket.emit('newMessage', {
  //     text: 'response',
  //     to: 'andrew'
  //   });
  // });
});

server.listen(port, () => {
  console.log('listening on 3000');
});




















//
