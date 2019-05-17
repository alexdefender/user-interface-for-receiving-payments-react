import { ADD_ACCOUNT, DEL_ACCOUNT, EDIT_ACCOUNT } from "../variables";

const initialState = [
  {
    name: "Alex Ivanov",
    email: "alex@site.com",
    paymentMethod: "PayPal",
    cardNumber: "1111 2222 3333 4444",
    expiryDate: "20 / 20",
    cvvCode: "123",
    issuingBank: "",
    id: 1
  }
];

const accounts = (state = initialState, action) => {
  if (action.type === ADD_ACCOUNT) {
    const doubleAccount = state.filter(
      account => account.id === action.payload.id
    );

    if (doubleAccount.length > 0) {
      return state.map(account => {
        if (account.id === action.payload.id) {
          return Object.assign(account, action.payload);
        }
        return account;
      });
    } else {
      return [...state, action.payload];
    }
  } else if (action.type === DEL_ACCOUNT) {
    const newState = state.filter(account => account.id !== action.payload);
    state = newState.slice();
  }

  return state;
};

export default accounts;
