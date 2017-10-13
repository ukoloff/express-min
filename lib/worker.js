const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
var cookieSession = require('cookie-session')

var app = express();

app.set('view engine', 'pug')

app.use(cookieParser())
app.use(cookieSession({
  name: 'SeSsIoN',
  keys: ['A very long secret phrase...',],
}))
app.use(log)
app.get('/', require('./home'))
app.get('/fact', require('./fact'))
app.get('/count', require('./count'))
app.use(require('./404'))
app.listen(80)

function log(req, res, next)
{
  console.log("[" + process.pid + "]", req.method, req.url)
  console.log('COOKIE', req.cookies)
  next()
}
