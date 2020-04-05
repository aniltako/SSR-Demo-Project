
import apiRoutes from './api'

export default async function routes ( fastify ) {
  fastify.register(apiRoutes, {prefix: '/'});
}