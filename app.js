var express = require('express')
var app = express()

app.use(express.static('public'))
app.use(express.static('dist'))

app.listen(3003, function () {
  console.log('Example app listening on port 3003!')
})
