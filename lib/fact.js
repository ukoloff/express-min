module.exports = fact

function fact(req, res)
{
  var n = parseInt(req.query.n) || 5
  req.session.n = n
  res.render('fact', {n: n, factorial: factorial, req: req})
}

function factorial(n)
{
  return n < 2 ? 1 : n * factorial(n - 1)
}
