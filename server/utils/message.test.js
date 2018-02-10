var expect = require('expect');
var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'jen';
    var text = 'som text';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message).toInclude({text, from});
  });
});
