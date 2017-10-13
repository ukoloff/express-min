const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan')

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
app.use(morgan('combined'))
app.get('/', require('./home'))
app.get('/fact', require('./fact'))
app.get('/count', require('./count'))
app.use(require('./404'))
app.listen(80)
