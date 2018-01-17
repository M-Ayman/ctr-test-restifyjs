var restify = require('restify');
var server = restify.createServer();
var pkg = require('../package.json');

server.get('/', function(req, res, next) {
  res.send('Hello from restifyjs');
  next();
});

server.listen(3000, function() {
  console.log('restifyts version %s running on port 3000', pkg.version);
  setInterval(function() {
    console.log('restifyts version %s running on port 3000', pkg.version);
  }, 10000);
});