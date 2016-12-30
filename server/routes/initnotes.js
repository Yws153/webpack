var express = require('express')
var router = express.Router();

var note = require("../mongo/note.js");

router.post('/', (req, res) => {

    note.find(function(err,notes){
        let note = {data: []}
        notes.forEach(v => note.data.push(v))

        res.json(note)
    })
})

module.exports = router
