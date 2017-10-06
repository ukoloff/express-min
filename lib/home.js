module.exports = home

function home(resp)
{
  resp.end(`
Hello, world!
<hr>
<a href=fact?n=7>Factorial</a>
    `)
}
