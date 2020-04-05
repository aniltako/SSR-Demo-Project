export type QuestionJSON = {
  id: string,
  text: string
}

export default class Question {

  private _id: string
  private _text: string

  constructor(id: string, text: string) {
    this._id = id
    this._text = text
  }

  get id (): string {
    return this._id
  }

  get text (): string {
    return this._text
  }

  toJSON (): QuestionJSON {
    return {
      id: this._id,
      text: this._text
    }
  }

}