import QuestionService from './questionService'
import MoodService from './moodService'

const services = {
  questionService: new QuestionService(),
  moodService: new MoodService()
}

export const questionService = services.questionService
export const moodService = services.moodService

export default services
