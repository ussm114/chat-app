var socket = io();

socket.on('connect', function () {
  console.log('connectd to server');
  //listener
  socket.on('newMessage', function (message) {
    console.log(message.from + ': ' + message.text);
  });
});
socket.on('disconnect', function () {
  console.log('disconnected from server');
});
