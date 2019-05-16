import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import validate from "../../utils/validate";
import { ADD_ACCOUNT, ADD_BTN_PRESS, EDIT_ACCOUNT } from "../../variables";

let idAccount = 2;

class AddAccountCart extends Component {
  closeAddForm = () => {
    this.props.doAddBtnActive(false);
    this.props.editAccount({});
  };

  addAccount = () => {
    const account = {
      name: this.nameAccount.value,
      email: this.emailAccount.value,
      paymentMethod: this.paymentAccount.value,
      cardNumber: this.cartNumber.value,
      expiryDate: this.cartDate.value,
      cvvCode: this.cartCode.value,
      id: this.id !== undefined ? this.id : idAccount
    };

    const checkAccount = validate(account);

    if (!checkAccount) {
      return;
    }
    this.props.addAccount(account);

    this.props.doAddBtnActive(false);
    this.props.editAccount({});
  };

  render() {
    const {
      id,
      name,
      email,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvvCode
    } = this.props.appState.editAccount;
    this.id = id;

    return (
      <form className="add-cart-account-wrapper">
        <h2 className="add-cart-account__title">
          Add Customer Account
          <span onClick={this.closeAddForm}>
            <i className="fas fa-times" />
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="add-cart-account-input">
          <label className="add-account-label" htmlFor="full-name">
            Name *
          </label>
          <input
            type="text"
            id="full-name"
            className="add-account-input"
            name="full-name"
            defaultValue={name !== undefined ? name : this.nameAccount}
            title="Write your name and surname"
            ref={name => (this.nameAccount = name)}
          />
        </div>

        <div className="add-cart-account-input">
          <label className="add-account-label" htmlFor="address">
            Email *
          </label>
          <input
            type="text"
            id="address"
            className="add-account-input"
            name="address"
            defaultValue={email !== undefined ? email : this.nameAccount}
            title="Write your address"
            ref={email => (this.emailAccount = email)}
          />
        </div>

        <div className="add-payment-wrapper">
          <label className="add-account-label" htmlFor="add-account-label">
            Payment method *
          </label>
          <div className="add-account-select-wrapper">
            <select
              name="payment"
              id="payment-select"
              className="add-account-select"
              defaultValue={
                paymentMethod !== undefined ? paymentMethod : this.nameAccount
              }
              ref={payment => (this.paymentAccount = payment)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
        </div>

        <p>
          Safe money transfer using your bank account. Visa, Maestro, Discover,
          American Express.
        </p>

        <div className="payment-card-wrapper">
          <div className="add-cart-account-input">
            <label className="add-account-label" htmlFor="card-number">
              Card number *
            </label>
            <input
              type="text"
              id="card-number"
              className="add-account-input"
              name="card-number"
              title="Write number card"
              defaultValue={
                cardNumber !== undefined ? cardNumber : this.nameAccount
              }
              placeholder="0000 0000 0000 0000"
              maxLength="19"
              ref={number => (this.cartNumber = number)}
            />
          </div>
          <div className="add-cart-account-input add-account-data">
            <label className="add-account-label" htmlFor="card-number">
              Expiry date *
            </label>
            <input
              type="text"
              id="cart-date"
              className="add-account-input add-account-input-date"
              name="card-date"
              title="Write expiry date"
              defaultValue={
                expiryDate !== undefined ? expiryDate : this.nameAccount
              }
              placeholder="MM / YY"
              ref={date => (this.cartDate = date)}
            />
          </div>
          <div className="add-cart-account-input add-account-code">
            <label className="add-account-label" htmlFor="card-number">
              CVV code *
            </label>
            <input
              type="text"
              id="card-code"
              className="add-account-input add-account-input-code"
              name="card-code"
              title="Write CCV code"
              defaultValue={cvvCode !== undefined ? cvvCode : this.nameAccount}
              placeholder="000"
              maxLength="3"
              ref={code => (this.cartCode = code)}
            />
          </div>
        </div>

        <div className="add-cart-account-btn">
          <button type="button" onClick={this.closeAddForm}>
            CANCEL
          </button>
          <button type="button" onClick={this.addAccount}>
            SAVE
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({
    addAccount: payload => {
      dispatch({ type: ADD_ACCOUNT, payload });
    },
    doAddBtnActive: payload => {
      dispatch({ type: ADD_BTN_PRESS, payload });
    },
    editAccount: payload => {
      dispatch({ type: EDIT_ACCOUNT, payload });
    }
  })
)(AddAccountCart);
