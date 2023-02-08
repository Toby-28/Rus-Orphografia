import { composeWithDevTools } from "@redux-devtools/extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import addDctVariantReducer from "./addDctVariantReducer";
import answerDctReducer from "./answerDctReducer";
import checkDctReducer from "./checkDctReducer";
import dictationReducer from "./dictationReducer";

const reducer = combineReducers({
  dictation: dictationReducer,
  answerDct: answerDctReducer,
  checkDct: checkDctReducer,
  addDctVariant: addDctVariantReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware())
)

type AppDispatchType = typeof store.dispatch
export type RootState = ReturnType<typeof reducer>
export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store