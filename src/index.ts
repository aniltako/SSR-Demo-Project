import { PORT } from './config'
import createServer from './server'
import routes from './routes'
 
const path = require('path');

const server = createServer()

server.register(require('fastify-formbody'))

server.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  },
  templates: 'src/templates'
})

server.register(require('fastify-static'), {
  root: path.join(__dirname, 'templates'),
})

server.register(routes, {prefix: '/'})

server.listen(PORT, (err, address) => {
  if (err) throw err
  server.log.info(`Server started ${address}`)
})