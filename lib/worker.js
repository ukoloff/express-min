require('http')
.createServer(router)
.listen(80)

function router(req, resp)
{
  console.log(`[${process.pid}] ${req.method} ${req.url}`)

  switch(req.url)
  {
    case '/':
      require('./home')(resp)
      break
    case '/fact':
      require('./factorial')(resp)
      break
    default:
      require('./404')(resp)
  }
}
