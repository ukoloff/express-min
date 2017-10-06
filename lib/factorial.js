url = require('url')

module.exports = fact

function fact(req, resp)
{
  var n = parseInt(url.parse(req.url, true).query.n) || 5
  resp.end(`
${n}! = ${factorial(5)}
<hr>
<a href=/>Home</a>
`)
}

function factorial(n)
{
  return n < 2 ? 1 : n * factorial(n - 1)
}
