const server = () => {
  const express = require('express')
  const compression = require('compression')

  const app = express()

  app.use(compression())
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Methods", "*")
    next()
  })

  app.use(express.static('public'))
  app.use('/api', require('./src/routerIndex.server'))

  const port = process.argv.filter(i => i.includes('port'))[0] ? process.argv.filter(i => i.includes('port'))[0].split('=')[1] : 80

  app.listen(port, () => {
    console.log('start at:' + port)
  })
}

const cluster = require('cluster')
const cpus = require('os').cpus().length

if (cluster.isMaster) {
  for (var i = 0; i < cpus; i++) {
    cluster.fork()
  }
} else {
  server()
}