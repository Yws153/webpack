const express = require('express')
const port = 2000
var app = express()

app.listen(port)

console.log('run at' + port)

app.use('/static', express.static('public'));

app.get('/', function() {
	console.log('23')
})
