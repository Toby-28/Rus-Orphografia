import { IAction } from "./dictationReducer";
import { ADD_ANSWER_DCT, EMPTY_ANSWER_DCT } from "./types";

export interface IAnswer {
  index: number
  isTrue: boolean
}

const initialState: IAnswer = { index: 0, isTrue: false }

const answerDctReducer = (state: IAnswer[] = [initialState], action: IAction) => {
  switch (action.type) {
    case ADD_ANSWER_DCT:
      return [...state, { ...action.payload }]

    case EMPTY_ANSWER_DCT:
      return [initialState]

    default:
      return state
  }
}

export default answerDctReducer