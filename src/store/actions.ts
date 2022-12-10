import { IAnswer } from "./answerReducer"
import { ITestCard } from "./testReducer"
import {
  CHECK, ADD_ANSWER,
  SET_TEST_CARD,
  EMPTY_ANSWER,
  EMPTY_CHECK,
  EMPTY_TEST_CARD,
  NEXT_TEST,
  EDIT_WORD_OPEN,
  ADD_TEMPORARY_TEXT,
  ADD_TEMPORARY_TITLE,
  ADD_TEMPORARY_VARIANT,
  INCREASE_E_W_I,
  ADD_TEMPORARY_ANSWER,
  REMOVE_T_VARIANT,
  REMOVE_T_ANSWER,
  EMPTY_TEMPORARIES,
} from "./types"

export const setTestCardData = (card: ITestCard) => {
  return { type: SET_TEST_CARD, payload: card }
}

export const emptyTestCard = () => {
  return { type: EMPTY_TEST_CARD, payload: {} }
}

export const addAnswer = (answer: IAnswer) => {
  return { type: ADD_ANSWER, payload: answer }
}

export const emptyAnswer = () => {
  return { type: EMPTY_ANSWER, payload: {} }
}

export const setCheck = (check: boolean) => {
  return { type: CHECK, payload: check }
}

export const emptyCheck = () => {
  return { type: EMPTY_CHECK, payload: {} }
}

export const toNextText = (number: number) => {
  return { type: NEXT_TEST, payload: number }
}

export const editWordOpen = (open: boolean) => {
  return { type: EDIT_WORD_OPEN, payload: open }
}

export const addTemporaryTitle = (title: string) => {
  return { type: ADD_TEMPORARY_TITLE, payload: title }
}

export const addTemporaryText = (text: string[]) => {
  return { type: ADD_TEMPORARY_TEXT, payload: text }
}

export const addTemporaryVariant = (variant: any[]) => {
  return { type: ADD_TEMPORARY_VARIANT, payload: variant }
}

export const addTemporaryAnswer = (answer: string) => {
  return { type: ADD_TEMPORARY_ANSWER, payload: answer }
}

export const increaseEWI = (index: number) => {
  return { type: INCREASE_E_W_I, payload: index }
}

export const removeTVariant = (index: number) => {
  return { type: REMOVE_T_VARIANT, payload: index }
}

export const removeTAnswer = (answers: string[]) => {
  return { type: REMOVE_T_ANSWER, payload: answers }
}

export const emptyTemporaries = () => {
  return { type: EMPTY_TEMPORARIES, payload: {} }
}