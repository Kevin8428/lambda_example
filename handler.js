'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'HELLO WORLD FUNCTION!',
      input: event,
    }),
  };
};

module.exports.getUser = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'GET USER FUNCTION!',
      // input: event,
    }),
  };
};

module.exports.printStream = async (event, context) => {  
    event.Records.forEach(function(record) {
    var payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
    console.log('Decoded payload:', payload);
  });
};
