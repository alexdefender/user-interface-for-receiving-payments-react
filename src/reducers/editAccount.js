import { EDIT_ACCOUNT } from "../variables";

const editAccount = (state = {}, action) => {
  if (action.type === EDIT_ACCOUNT) {
    state = action.payload;
  }

  return state;
};

export default editAccount;
