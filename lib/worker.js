const http = require('http')
const path = require('path')
const express = require('express')
const index = require('serve-index')

var app = express();
var root = path.resolve()

app.use(log)
app.use(express.static(root))
app.use(index(root))

app.listen(80)

function log(req, res, next)
{
  console.log("[" + process.pid + "]", req.method, req.url)
  next()
}
