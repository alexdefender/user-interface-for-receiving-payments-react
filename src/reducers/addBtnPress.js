import { ADD_BTN_PRESS } from "../variables";

const addBtnPress = (state = false, action) => {
  if (action.type === ADD_BTN_PRESS) {
    return action.payload;
  }

  return state;
};

export default addBtnPress;
