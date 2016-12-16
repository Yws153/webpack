var express = require('express')
var router = express.Router();

router.get('/note', function(req, res) {
    res.render('node')
})

module.exports = router
