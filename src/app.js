var express = require('express')
var webpack = require('webpack')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config.js')
var compiler = webpack(config)

var app = express()

// var db = require('mongoskin').db('localhost:27017/local');
//
// db.collection('local').find().toArray(function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

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
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });
//
// // /user 节点接受 DELETE 请求
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}))
app.use(WebpackHotMiddleware(compiler))

var router = express.Router()
router.get('/', function (req, res, next) {
    res.redirect('/template.html');
})
app.use(router)

// app.use(express.static('template'));
// app.use('/static', express.static('public'));

 // var server = app.listen(2000, '127.0.0.1', function () {
 //   var host = server.address().address;
 //   var port = server.address().port;
 //
 //   console.log('Example app listening at http://%s:%s', host, port);
 // });

 // app.use(function(req, res, next) {
 //   res.status(404).send('Sorry cant find that!');
 // });
// app['m-search']('/', function ...
