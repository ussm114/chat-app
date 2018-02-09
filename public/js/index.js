var socket = io();

socket.on('connect', function () {
  console.log('connectd to server');
  // emitter
  socket.emit('createMessage', {
    to: 'jenn@ex.com',
    text: 'hei, this is mess from frontend'
  });
  //listener
  socket.on('newMessage', function (message) {
    console.log('got new message: ', message.text);
  });
});


socket.on('disconnect', function () {
  console.log('disconnected from server');
});
