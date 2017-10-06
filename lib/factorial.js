module.exports = fact

function fact(resp)
{
  var n = 6
  resp.end(`${n}! = ${factorial(5)}`)
}

function factorial(n)
{
  return n < 2 ? 1 : n * factorial(n - 1)
}
