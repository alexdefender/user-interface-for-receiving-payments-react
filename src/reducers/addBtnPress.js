import { ADD_BTN_PRESS } from "../variables";

export default function addBtnPress(state = false, action) {
  if (action.type === ADD_BTN_PRESS) {
    return action.payload;
  }

  return state;
}
