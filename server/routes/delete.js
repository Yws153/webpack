var express = require('express')
var router = express.Router();

var note = require("../mongo/note.js");

router.post('/', (req, res) => {

    const id = req.body.id
    var wherestr = {'id' : id}

    note.find(wherestr, () => console.log(note))


    // note.remove(wherestr, (err) => {
    //     if(err) {
    //         res.json({err: err, ok: false})
    //     } else {
    //         res.json({err: '',ok: true})
    //     }
    // })　
})

module.exports = router
