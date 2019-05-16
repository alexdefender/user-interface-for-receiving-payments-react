import {
  PAYMENTS,
  PAYMENT_PAYPAL,
  PAYMENT_BALANCE,
  SUBTOTAL,
  COMMISSION,
  VAT
} from "../variables";

const initialState = {
  price: 0,
  commission: 0,
  vat: 0,
  totalPrice: 0
};
export default function totalCostGoods(state = initialState, action) {
  if (action.type === SUBTOTAL) {
    state.price = action.payload;
  } else if (PAYMENTS.includes(action.type)) {
    const newState = Object.assign({}, state);
    newState.commission =
      action.type === PAYMENT_BALANCE ? 0 : (state.price * COMMISSION) / 100;
    newState.vat =
      action.type === PAYMENT_PAYPAL
        ? ((state.price + newState.commission) * VAT) / 100
        : 0;
    newState.totalPrice = state.price + newState.commission + newState.vat;
    state = newState;
  }

  return state;
}
