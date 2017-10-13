module.exports = count

function count(req, res)
{
  var count = parseInt(req.cookies.count) || 0
  count++
  res.cookie('count', count)
  res.render('count', {count})
}
