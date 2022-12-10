import { IAction } from "./testReducer"
import {
  ADD_TEMPORARY_ANSWER,
  ADD_TEMPORARY_TEXT,
  ADD_TEMPORARY_TITLE,
  ADD_TEMPORARY_VARIANT,
  EDIT_WORD_OPEN,
  EMPTY_TEMPORARIES,
  INCREASE_E_W_I,
  REMOVE_T_ANSWER,
  REMOVE_T_VARIANT
} from "./types";

interface IAddVariant {
  editVariantOpen: boolean
  editWordIndex: number
  title: string[]
  text: string[]
  variants: (number | string)[][]
  answers: string[]
}

const initialState: IAddVariant = {
  editVariantOpen: false,
  editWordIndex: 1, // $$$(index)
  title: [],
  text: [],
  variants: [],
  answers: []
}

const addVariantReducer = (state: IAddVariant = initialState, action: IAction) => {
  switch (action.type) {
    case EDIT_WORD_OPEN:
      return { ...state, editVariantOpen: action.payload }

    case ADD_TEMPORARY_TITLE:
      return { ...state, title: action.payload }

    case ADD_TEMPORARY_TEXT:
      return { ...state, text: action.payload }

    case ADD_TEMPORARY_VARIANT:
      return { ...state, variants: [...state.variants, action.payload] }

    case ADD_TEMPORARY_ANSWER:
      return { ...state, answers: [...state.answers, action.payload] }

    case INCREASE_E_W_I:
      return { ...state, editWordIndex: action.payload }

    case REMOVE_T_VARIANT:
      return {
        ...state, variants: [...state.variants.filter(variant => variant[0] !== action.payload)]
      }

    case REMOVE_T_ANSWER:
      return { ...state, answers: action.payload }

    case EMPTY_TEMPORARIES:
      return initialState

    default:
      return state;
  }
}

export default addVariantReducer
