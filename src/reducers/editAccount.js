import { EDIT_ACCOUNT } from "../variables";

export default function editAccount(state = {}, action) {
  if (action.type === EDIT_ACCOUNT) {
    state = action.payload;
  }

  return state;
}
