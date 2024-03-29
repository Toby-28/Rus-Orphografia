import { EMPTY_DCT_CARD, NEXT_DCT, SET_DCT_CARD } from "./types"

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

const dictationReducer = (state: ITestCard = initialState, action: IAction) => {
  switch (action.type) {
    case SET_DCT_CARD:
      return { ...state, ...action.payload }

    case EMPTY_DCT_CARD:
      return initialState

    case NEXT_DCT:
      return { ...state, number: action.payload }

    default:
      return state
  }
}

export default dictationReducer