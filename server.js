/**
 * Node.js server. (http://nodejs.org/api/index.html)
 */
console.log('Server running at http://localhost:8080/');

var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(connect.favicon())
  .use(connect.logger('dev'))
  .use(connect.static(__dirname + '/app'))
  .use(connect.cookieParser());

http.createServer(app).listen(8080);