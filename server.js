var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello From Tessel');
  console.log(res);
}).listen(1337, '192.168.100.14'); // ip of the tessel
console.log('Server running at http://192.168.100.14:1337/');