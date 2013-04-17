/**
 * Node.js server. (http://nodejs.org/api/index.html)
 */
console.log('Server running at http://localhost:8080/');

// var connect = require('connect')
//   , http = require('http');

// var app = connect()
//   .use(connect.favicon())
//   .use(connect.logger('dev'))
//   .use(connect.static(__dirname + '/app'))
//   .use(connect.cookieParser());

// http.createServer(app).listen(8080);
//
var express = require('express');
var fs = require('fs');

// Load data file
var products = JSON.parse(fs.readFileSync('app/api/products.json'));
var all_rss = JSON.parse(fs.readFileSync('app/api/all_rss.json'));

var app = express();

app.configure(function () { /* … */ });

app.use(express.favicon())
  .use(express.logger('dev'))
  .use(express.static(__dirname + '/app'))
  .use(express.cookieParser());

// --------
// REST API // Exemple for Product
// --------

app.get('/je-suis-une-url-de-back', function() { console.log('back')});
app.get('/api/products', function (req, res) { res.json(products) });

app.get('/api/products/:id', function (req, res) {
  var product = products.filter(function (p) { return p.id == req.params.id })[0];
  if (product) {
    res.json(product);
  } else {
    res.status(404).end();
  }
});

app.post('/api/products', function (req, res) { res.status(501).end() });
app.put('/api/products/:id', function (req, res) { res.status(501).end() });
app.del('/api/products', function (req, res) { res.status(501).end() });
app.del('/api/products/:id', function (req, res) { res.status(501).end() });

// --------
// REST API // RSS
// --------

app.get('/api/all_rss', function (req, res) { res.json(all_rss) });

app.get('/api/all_rss/:id', function (req, res) {
  var rss = all_rss.filter(function (p) { return p.id == req.params.id })[0];
  if (rss) {
    res.json(rss);
  } else {
    res.status(404).end();
  }
});

app.post('/api/all_rss', function (req, res) { res.status(501).end() });
app.put('/api/all_rss/:id', function (req, res) { res.status(501).end() });
app.del('/api/all_rss', function (req, res) { res.status(501).end() });
app.del('/api/all_rss/:id', function (req, res) { res.status(501).end() });

// Start server
app.listen(8080);
