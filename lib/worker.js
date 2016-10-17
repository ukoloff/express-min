const http = require('http')
const path = require('path')
const express = require('express')
const index = require('serve-index')

var app = express();
var root = path.resolve()

app.use(express.static(root))
app.use(index(root))

app.listen(80)
