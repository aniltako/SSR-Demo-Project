import QuestionStore from "./QuestionStore";

export default class QuestionService {
  getRamdomQuestions() {
    return new QuestionStore().getRamdomly()
  }
}