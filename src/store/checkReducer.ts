import { IAction } from "./testReducer"
import { CHECK, EMPTY_CHECK } from "./types";

const checkReducer = (state = false, action: IAction) => {
  switch (action.type) {
    case CHECK:
      return action.payload

    case EMPTY_CHECK:
      return false

    default:
      return state;
  }
}

export default checkReducer