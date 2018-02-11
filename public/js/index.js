var socket = io();

socket.on('connect', function () {
  console.log('connectd to server');
});

//listener
socket.on('newMessage', function (message) {
  console.log(message.from + ': ' + message.text);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'user',
    text: jQuery('[name=message]').val()
  }, function() {

  });
});
