const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

app.set('view engine', 'pug')

app.use(cookieParser())
app.use(session({
    store: new FileStore({path: './sessions'}),
    name: 'SeSsIoN',
    resave: false,
    saveUninitialized: false,
    secret: "Another long pass phrase...",
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
  next()
}
