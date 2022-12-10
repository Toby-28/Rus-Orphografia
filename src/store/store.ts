import { composeWithDevTools } from "@redux-devtools/extension";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import addVariantReducer from "./addVariantReducer";
import answerReducer from "./answerReducer";
import checkReducer from "./checkReducer";
import testReducer from "./testReducer";

const reducer = combineReducers({
  test: testReducer,
  answer: answerReducer,
  check: checkReducer,
  addVariant: addVariantReducer
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