// var express = require('express')
// var webpack = require('webpack')
// // var WebpackDevMiddleware = require('webpack-dev-middleware')
// // var WebpackHotMiddleware = require('webpack-hot-middleware')
// // var config = require('../webpack.config.js')
// // var compiler = webpack(config)
//
// var app = express()
//
//
// app.use(express.static('template'));
//  // 对网站首页的访问返回 "Hello World!" 字样
//
// app.get('/', function (req, res) {
//   res.redirect('./template.html');
// });
//
// // 网站首页接受 POST 请求
// // app.post('/', function (req, res) {
// //   res.send('Got a POST request');
// // });
//
// // /user 节点接受 PUT 请求
// // app.put('/user', function (req, res) {
// //   res.send('Got a PUT request at /user');
// // });
// //
// // // /user 节点接受 DELETE 请求
// // app.delete('/user', function (req, res) {
// //   res.send('Got a DELETE request at /user');
// // });
// // app.use(WebpackDevMiddleware(compiler, {
// //   publicPath: config.output.publicPath,
// //   stats: { colors: true }
// // }))
// // app.use(WebpackHotMiddleware(compiler))
//
// // var router = express.Router()
// // router.get('/', function (req, res, next) {
// //     res.redirect('/template.html');
// // })
// // app.use(router)
//
//
//
// // app.use(express.static('template'));
// // app.use('/static', express.static('public'));
//
//  var server = app.listen(2000, '127.0.0.1', function () {
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log('Example app listening at http://%s:%s', host, port);
//  });
//
//  // app.use(function(req, res, next) {
//  //   res.status(404).send('Sorry cant find that!');
//  // });
// // app['m-search']('/', function ...
// var environment = process.env.NODE_ENV
var webpack = require('webpack')
var bodyParser = require('body-parser')
var path = require('path')
var port = 2000
var app = new (require('express'))()
// var router = require('./routes/index')

var config
config = require('../webpack.config')
// if(environment === 'production') {
//   config = require('./webpack.config')
// } else if (environment === 'development') {
//   config = require('./webpack.config.dev')
// } else {
//   console.log('Please define NODE_ENV first\nlinux & mac: export NODE_ENV=production(or development)\nwindows: set NODE_ENV=production(or development\n)')
// }

var compiler = webpack(config)

// if(environment === 'development') {
  var webpackHotMiddleware = require('webpack-hot-middleware')
  app.use(webpackHotMiddleware(compiler))
// }
var webpackDevMiddleware = require('webpack-dev-middleware')
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))

// body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'template/template.html'))
})
//
// app.post("/api/login", router.login)
// app.post("/api/check", router.check)
// app.post("/api/titles", router.titles)
// app.post("/api/tags", router.tags)
// app.post("/api/upload", router.upload)
// app.post("/api/single", router.single)
// app.post("/api/edit", router.edit)
// app.post("/api/remove", router.remove)
// app.post("/api/comment", router.addComment)

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
