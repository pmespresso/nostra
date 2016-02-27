<<<<<<< HEAD
var config = require('./config');
var http = require('http');
var url = require('url');

function start(route, routes) {

  function onRequest(request, response) {

    var pathname = url.parse(request.url).pathname;
    var postData = '';

    request.setEncoding('utf8');

    request.addListener('data', function (postDataChunk) {
      postData += postDataChunk;
    });

    request.addListener('end', function () {
      route(routes, pathname, response, postData);
    });
  }

  http.createServer(onRequest).listen(config.port);
  console.log('Started HTTP server on port ' + config.port + '...');
}

module.exports = {
  start: start
};
=======
var http = require('http')
var port = process.env.PORT || 3000;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hey bitch');
}).listen(port);
>>>>>>> 9b48eebb82b627546b091493f1ca5affafe4f0b3
