// http://www.expressjs.com.cn/guide/routing.html
/*{
   "presets": [
     "es2015",
     "react",
     "stage-2"
   ],
   "plugins": [
       "react-hot-loader/babel"
   ]
 }*/

var express = require('express');
var app = express();
app.use(express.static('template'));
 // 对网站首页的访问返回 "Hello World!" 字样
// app.get('/', function (req, res) {
//   res.redirect('./app#/counter');
// });

// 网站首页接受 POST 请求
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// app.use(express.static('template'));
// app.use('/static', express.static('public'));

 var server = app.listen(2000, '127.0.0.1', function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
 });

 // app.use(function(req, res, next) {
 //   res.status(404).send('Sorry cant find that!');
 // });
// app['m-search']('/', function ...
