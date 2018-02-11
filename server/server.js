const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message.js');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);  // conf. server to user socket io

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  // send to user that joined
  socket.emit('newMessage', generateMessage('admin','welceom'));
  // send to all the other users
  socket.broadcast.emit('newMessage', generateMessage('admin','new user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('message: ', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('this text is from server (from callback)'); // send confirmation to the client
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('listening on 3000');
});




















//
