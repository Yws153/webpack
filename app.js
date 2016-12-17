const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
var router = express.Router();



var app = express();
const port = 2000;

app.set('views', './server/views')
// app.set('views', './public/server/views')

app.set('view engine', 'ejs')

var webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js')

var compiler = webpack(config)

app.use(WebpackDevMiddleware(compiler, {publicPath: config.output.publicPath, noInfo: true, stats:{ colors: true }}))
app.use(WebpackHotMiddleware(compiler))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// app.get('/', function (req, res) {
//     res.render('index');
// });

require('./server/routes')(app)
var reload = require('reload')


var http = require('http')
var server = http.createServer(app);

reload(server, app)

server.listen(port, function() {
    console.log('run at http:127.0.0.1:2000/')
})
