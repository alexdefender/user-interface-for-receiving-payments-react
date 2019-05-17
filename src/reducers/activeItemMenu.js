import { MENU_ACCOUNTS, MENU_PAYMENT, MENU_ALL } from "../variables";

const initialState = {
  accountsMenu: false,
  paymentsMenu: false
};

const activeItemMenu = (state = initialState, action) => {
  if (action.type === MENU_ALL) {
    const newState = Object.assign({}, state);
    for (let key in newState) {
      newState[key] = action.payload;
    }
    state = newState;
  } else if (action.type === MENU_ACCOUNTS) {
    const newState = Object.assign({}, state);
    newState.accountsMenu = action.payload;
    state = newState;
  } else if (action.type === MENU_PAYMENT) {
    const newState = Object.assign({}, state);
    newState.paymentsMenu = action.payload;
    state = newState;
  }

  return state;
};

export default activeItemMenu;
