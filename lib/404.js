module.exports = error

function error(req, res)
{
  res.statusCode = 404;

  res.render('404')
}
