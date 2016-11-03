var http = require('http');
http.createServer(function (req, res) {
	console.log(req)
	res.writeHead(200, {'Content-Typpe': 'application/x-www-form-urlencoded'});
	res.end('Hello World\n');
}).listen(2000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:2000/');