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

socket.on('newLocationMessage', function (message) {
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">my current location</a>');
  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  var messageTextbox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'user',
    text: messageTextbox.val()
  }, function() {
    messageTextbox.val('');
  });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function () {
  if(!navigator.geolocation) {
    return alert('geolocation not supported by your browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');
  // getCurrentPosition has success clbck, and failure clbck
  navigator.geolocation.getCurrentPosition(function (position) {
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    console.log(position);
  }, function () {
    locationButton.removeAttr('disabled').text('Send location');
    alert('unable to fetch location');
  });
});





































//
