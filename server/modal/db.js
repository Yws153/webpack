const settings = require('./setting')
const Db = require('mongodb').Db
const Server = require('mongodb').Server

    module.exports = new Db(settings.db, new Server(settings.host, settings.port),
  {safe: true})

// var db = require('mongoskin').db('localhost:27017/animals');
//
// db.collection('mamals').find().toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
// });
