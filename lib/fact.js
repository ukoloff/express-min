module.exports = fact

function fact(req, res)
{
  var n = parseInt(req.query.n) || 5
  res.render('fact', {n: n, factorial: factorial})
}

function factorial(n)
{
  return n < 2 ? 1 : n * factorial(n - 1)
}
