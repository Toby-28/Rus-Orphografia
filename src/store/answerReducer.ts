import { IAction } from "./testReducer";
import { ADD_ANSWER, EMPTY_ANSWER } from "./types";

export interface IAnswer {
  index: number
  isTrue: boolean
}

const initialState: IAnswer = { index: 0, isTrue: false }

const answerReducer = (state: IAnswer[] = [initialState], action: IAction) => {
  switch (action.type) {
    case ADD_ANSWER:
      return [...state, { ...action.payload }]

    case EMPTY_ANSWER:
      return [initialState]

    default:
      return state
  }
}

export default answerReducer