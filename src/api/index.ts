import questionRoutes from './question/'

export default async function apiRoutes (fastify) {

  fastify.get('/', async (request, reply) => {
    reply.view('home.ejs', {companyName: 'DEMO INC.'})
    return reply
  })

  fastify.get('/success', async (request, reply) => {
    reply.view('success.ejs')
    return reply
  })

  fastify.get('/health', (request, reply) => {
    reply.send({ status: 'ok' })
  })

  fastify.register(questionRoutes, { prefix: '/' })
}