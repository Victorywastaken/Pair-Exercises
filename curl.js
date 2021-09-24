module.exports = () => {
  const request = require('request');

  process.stdin.on('data', (data) => {

  const cmd = data.toString().trim().split(' ')[0];
  const URL = data.toString().trim().split(' ')[1];

    if (cmd === 'request') {
      request(URL, function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      })
    }
});
}

