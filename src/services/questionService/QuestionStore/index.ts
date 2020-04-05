import questions from './constants'
import Question from '../Question'

export default class QuestionStore {

  protected _questionList = []

  constructor() {
    this._questionList = questions
  }

  getRamdomly(): Question[] {
    const newQuestions = this._questionList
    for (let i = newQuestions.length -1 ; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newQuestions[i], newQuestions[j]] = [newQuestions[j], newQuestions[i]]
    }
    return newQuestions
  } 
}