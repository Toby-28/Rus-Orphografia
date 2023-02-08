import { IAction } from "./dictationReducer"
import {
  ADD_TEMPORARY_ANSWER_DCT,
  ADD_TEMPORARY_TEXT_DCT,
  ADD_TEMPORARY_TITLE_DCT,
  ADD_TEMPORARY_VARIANT_DCT,
  EDIT_WORD_OPEN_DCT,
  EMPTY_TEMPORARIES_DCT,
  INCREASE_E_W_I_DCT,
  REMOVE_T_ANSWER_DCT,
  REMOVE_T_VARIANT_DCT
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

const addDctVariantReducer = (state: IAddVariant = initialState, action: IAction) => {
  switch (action.type) {
    case EDIT_WORD_OPEN_DCT:
      return { ...state, editVariantOpen: action.payload }

    case ADD_TEMPORARY_TITLE_DCT:
      return { ...state, title: action.payload }

    case ADD_TEMPORARY_TEXT_DCT:
      return { ...state, text: action.payload }

    case ADD_TEMPORARY_VARIANT_DCT:
      return { ...state, variants: [...state.variants, action.payload] }

    case ADD_TEMPORARY_ANSWER_DCT:
      return { ...state, answers: [...state.answers, action.payload] }

    case INCREASE_E_W_I_DCT:
      return { ...state, editWordIndex: action.payload }

    case REMOVE_T_VARIANT_DCT:
      return {
        ...state, variants: [...state.variants.filter(variant => variant[0] !== action.payload)]
      }

    case REMOVE_T_ANSWER_DCT:
      return { ...state, answers: action.payload }

    case EMPTY_TEMPORARIES_DCT:
      return initialState

    default:
      return state;
  }
}

export default addDctVariantReducer
