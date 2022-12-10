import { EMPTY_TEST_CARD, NEXT_TEST, SET_TEST_CARD } from "./types"

export interface IData {
  text: string[]
  variants: (string | number)[][]
  answers: string[]
}

export interface ITestCard {
  number?: number
  id: number
  title: string
  data: IData
}

export interface IAction {
  type: string
  payload: any
}

const initialState: ITestCard = {
  number: 0,
  id: 0,
  title: "",
  data: {
    text: [],
    variants: [],
    answers: []
  }
}

const testReducer = (state: ITestCard = initialState, action: IAction) => {
  switch (action.type) {
    case SET_TEST_CARD:
      return { ...state, ...action.payload }

    case EMPTY_TEST_CARD:
      return initialState

    case NEXT_TEST:
      return { ...state, number: action.payload }
    default:
      return state
  }
}

export default testReducer