const path = require('path')
const express = require('express')

var app = express();

app.set('view engine', 'pug')

app.use(log)
app.get('/', require('./home'))
app.get('/fact', require('./fact'))
app.use(require('./404'))
app.listen(80)

function log(req, res, next)
{
  console.log("[" + process.pid + "]", req.method, req.url)
  next()
}
