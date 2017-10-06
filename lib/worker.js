url = require('url')

require('http')
.createServer(router)
.listen(80)


function router(req, resp)
{
  console.log(`[${process.pid}] ${req.method} ${req.url}`)

  resp.setHeader('Content-Type', 'text/html; charset=utf-8')
  switch(url.parse(req.url).pathname)
  {
    case '/':
      require('./home')(resp)
      break
    case '/fact':
      require('./factorial')(req, resp)
      break
    default:
      require('./404')(resp)
  }
}
