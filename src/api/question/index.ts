
import { questionService, moodService } from  '../../services'

export default async function routes ( fastify) {
  fastify.get('/question', async (request, reply) => {
    const { v } = request.query
    const questions = questionService.getRamdomQuestions();
    const moods = moodService.getMoods();
    const companyName = 'DEMO Inc'

    reply.view('question.ejs', {
      questions: questions, 
      moods: moods, 
      smiley: v,
      companyName: companyName
    })
    return reply
  })

  fastify.post('/question', async (request, reply) => {

    const { body } = request
    
    reply.send({redirect: '/success'})
    return reply
  })
}