import { IAnswer } from "./answerDctReducer"
import { ITestCard } from "./dictationReducer"
import {
  CHECK_DCT, ADD_ANSWER_DCT,
  SET_DCT_CARD,
  EMPTY_ANSWER_DCT,
  EMPTY_CHECK_DCT,
  EMPTY_DCT_CARD,
  NEXT_DCT,
  EDIT_WORD_OPEN_DCT,
  ADD_TEMPORARY_TEXT_DCT,
  ADD_TEMPORARY_TITLE_DCT,
  ADD_TEMPORARY_VARIANT_DCT,
  INCREASE_E_W_I_DCT,
  ADD_TEMPORARY_ANSWER_DCT,
  REMOVE_T_VARIANT_DCT,
  REMOVE_T_ANSWER_DCT,
  EMPTY_TEMPORARIES_DCT,
} from "./types"

export const setTestCardData = (card: ITestCard) => {
  return { type: SET_DCT_CARD, payload: card }
}

export const emptyTestCard = () => {
  return { type: EMPTY_DCT_CARD, payload: {} }
}

export const addAnswer = (answer: IAnswer) => {
  return { type: ADD_ANSWER_DCT, payload: answer }
}

export const emptyAnswer = () => {
  return { type: EMPTY_ANSWER_DCT, payload: {} }
}

export const setCheck = (check: boolean) => {
  return { type: CHECK_DCT, payload: check }
}

export const emptyCheck = () => {
  return { type: EMPTY_CHECK_DCT, payload: {} }
}

export const toNextText = (number: number) => {
  return { type: NEXT_DCT, payload: number }
}

export const editWordOpen = (open: boolean) => {
  return { type: EDIT_WORD_OPEN_DCT, payload: open }
}

export const addTemporaryTitle = (title: string) => {
  return { type: ADD_TEMPORARY_TITLE_DCT, payload: title }
}

export const addTemporaryText = (text: string[]) => {
  return { type: ADD_TEMPORARY_TEXT_DCT, payload: text }
}

export const addTemporaryVariant = (variant: any[]) => {
  return { type: ADD_TEMPORARY_VARIANT_DCT, payload: variant }
}

export const addTemporaryAnswer = (answer: string) => {
  return { type: ADD_TEMPORARY_ANSWER_DCT, payload: answer }
}

export const increaseEWI = (index: number) => {
  return { type: INCREASE_E_W_I_DCT, payload: index }
}

export const removeTVariant = (index: number) => {
  return { type: REMOVE_T_VARIANT_DCT, payload: index }
}

export const removeTAnswer = (answers: string[]) => {
  return { type: REMOVE_T_ANSWER_DCT, payload: answers }
}

export const emptyTemporaries = () => {
  return { type: EMPTY_TEMPORARIES_DCT, payload: {} }
}