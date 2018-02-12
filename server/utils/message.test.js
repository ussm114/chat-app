var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'jen';
    var text = 'som text';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message).toInclude({text, from});
  });
});

describe('generateLocationMessage', () => {
  it('should generate valid google maps url', () => {
    var from = 'me';
    var lat = '12';
    var lon = '13';
    var url = 'https://www.google.com/maps?q=12,13';
    var message = generateLocationMessage(from, lat, lon);
    expect(message).toInclude({from, url});
    expect(message.createdAt).toBeA('number');
  });
});











































//
