module.exports = error

function error(resp)
{
  resp.statusCode = 404;

  resp.end(`
Not found!
<hr>
<a href=/>Home</a>
`)
}
