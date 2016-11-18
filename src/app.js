var express = require('express');
var path = require('path');
var port = process.env.PORT || 2000
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var router = express.Router();

// global.dbHandle=require("./dbbase/dbHandle.js");
// global.db=mongoose.connect("mongodb://localhost:27017/test");

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
// path.join(__dirname, 'views')
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.listen(port)
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//

console.log('node start'+port)
app.use(express.static(path.join(__dirname, 'containers')));

app.get('/', function(req, res) {
	res.render("index",{ title : "react-note" });
});

// app.get('/init', function(req,res,next){/*请求参数，相应参数和负责把错误信息运送出来的next参数*/
// 	var noteModel=global.dbHandle.getModel("note");/*获取note数据库模型，模型能直接对数据库进行操作*/
// 	noteModel.find({},function(err,notes){
// 		if(err){
// 			return next(err);
// 		}else{
// 			res.json(notes);
// 		}
// 	})
// });

// app.use('/', routes);
// app.use('/users', users);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


module.exports = app;



// var server = require("./server/server");
// var router = require("./routes");
//
// server.start(router.route);
