import { IAction } from "./dictationReducer"
import { CHECK_DCT, EMPTY_CHECK_DCT } from "./types";

const checkDctReducer = (state = false, action: IAction) => {
  switch (action.type) {
    case CHECK_DCT:
      return action.payload

    case EMPTY_CHECK_DCT:
      return false

    default:
      return state;
  }
}

export default checkDctReducer