var http = require('http');
var url = require("url");

function start(route, handle) {
    http.createServer(function (request, response) {
    	// console.log(req)
    	res.writeHead(200, {'Content-Typpe': 'application/x-www-form-urlencoded'});
    	res.end('Hello World\n');
        // var pathname = url.parse(request.url).pathname;
        // console.log("Request for "+pathname+" received.");
        //
        // route(handle, pathname);
        //
        // response.writeHead(200, {"Content-Type":"text/plain"});
        // var content = route(handle,pathname);
        // // response.write(content);
        // response.end('Hello World\n');
    }).listen(2000, '127.0.0.1');
}
start()
exports.start=start;
console.log('Server running at http://127.0.0.1:2000/');

// aa('sd')
// function aa(a, function(){
// 	console.log('hello')
// })
//
// console.log('woshixia')

// var http = require("http");
// var url = require("url");
//
// function start(route) {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//
//     route(pathname);
//
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
//
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
//
// exports.start = start;

// var http = require("http");
// var url = require("url");
//
// function start(route,handle){
    // function onRequest(request,response){
    //     var pathname=url.parse(request.url).pathname;
    //     console.log("Request for "+pathname+" received.");
    //
    //     route(handle,pathname);
    //
    //     response.writeHead(200,{"Content-Type":"text/plain"});
    //     var content=route(handle,pathname);
    //     response.write(content);
    //     response.end();
    // };
    // http.createServer(function (req, res) {
    // 	console.log(req)
    // 	res.writeHead(200, {'Content-Typpe': 'application/x-www-form-urlencoded'});
    // 	res.end('Hello World\n');
    // }).listen(2000, '127.0.0.1');
    // http.createServer(onRequest).listen(2000, '127.0.0.1');
//     http.createServer(function (request,response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for "+pathname+" received.");
//
//         route(handle, pathname);
//
//         response.writeHead(200, {"Content-Type":"text/plain"});
//         var content = route(handle,pathname);
//         response.write(content);
//         response.end();
//     }).listen(2000, '127.0.0.1');
//
//
//     console.log("Server has started.");
// }
// exports.start=start;
/*"start": "http-server -a 0.0.0.0 -p 2000"*/
