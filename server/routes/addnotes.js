var express = require('express')
var router = express.Router();

var note = require("../mongo/note.js");

router.post('/', (req, res) => {

    const body = req.body
    const time = new Date()
    const date = time.getFullYear() + '-' + time.getMonth() + '-' + time.getDay()
    let len = 0

    note.find(function(err,notes){
        len = notes.length
    })

    var noteEntity = new note({
            id: len,
            title : body.title,
            description : body.description,
            date : date
        });

    noteEntity.save();

})

module.exports = router
