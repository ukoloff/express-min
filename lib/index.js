const os = require('os')
const cluster = require('cluster')

if(cluster.isMaster)
{
  for(var j = os.cpus().length; j>0; j--)
    cluster.fork()
  cluster
  .on('listening', function(worker, address)
  {
    console.log("Worker", worker.process.pid, "listening on port", address.port)
  })
  .on('exit', function(worker, code, signal)
  {
    console.log("Worker", worker.process.pid, "died!")
  })
  IPs()
}
else
  require('./worker')

function IPs()
{
  console.log("Point your browser to:")
  const nics = require('os').networkInterfaces()
  for(var k in nics)
    for(var int of nics[k])
      if('IPv4' == int.family)
        console.log(` - http://${int.address}`)
}
