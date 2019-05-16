import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import logoPaypal from "../../img/paypal-logo.png";
import logoVisaMastercard from "../../img/visa-and-mastercard-logos.png";
import { connect } from "react-redux";
import {
  PAYMENT_PAYPAL,
  PAYMENT_CARD,
  PAYMENT_BALANCE,
  MENU_PAYMENT,
  MENU_ALL,
  ADD_BTN_PRESS
} from "../../variables";

class PaymentSelection extends Component {
  componentDidMount() {
    this.props.doItemsMenuNoActive(false);
    this.props.doItemMenuActive(true);
    this.props.doAddBtnActive(false);
  }

  isPaypal = () => {
    this.props.isPaymentPaypal();
  };

  isCard = () => {
    this.props.isPaymentCard();
  };

  isBalance = () => {
    this.props.isPaymentBalance();
  };

  render() {
    return (
      <div>
        <h2 className="payment-selection__title">Payment Selection</h2>
        <div className="payment-items">
          <div className="payment-item">
            <input
              type="radio"
              id="payment-paypal"
              name="payment"
              className="radio"
              onChange={this.isPaypal}
            />
            <label htmlFor="payment-paypal">
              <img src={logoPaypal} />
            </label>
          </div>
          <div className="payment-item">
            <input
              type="radio"
              id="payment-visa-master"
              name="payment"
              className="radio"
              onChange={this.isCard}
            />
            <label htmlFor="payment-visa-master">
              <img src={logoVisaMastercard} />
            </label>
          </div>
          <div className="payment-item">
            <input
              type="radio"
              id="payment-balance"
              name="payment"
              className="radio"
              onChange={this.isBalance}
            />
            <label htmlFor="payment-balance">
              <span>Balance</span>
            </label>
          </div>
        </div>

        <div className="cart-accounts-nav">
          <div className="cart-accounts__back">
            <Link to="/">
              <i className="fas fa-arrow-left" /> Return to Customer Account
            </Link>
          </div>
          <div className="cart-accounts__next">
            <Link to="/payment">COMPLETE ORDER</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({
    isPaymentPaypal: () => {
      dispatch({ type: PAYMENT_PAYPAL });
    },
    isPaymentCard: () => {
      dispatch({ type: PAYMENT_CARD });
    },
    isPaymentBalance: () => {
      dispatch({ type: PAYMENT_BALANCE });
    },
    doItemMenuActive: payload => {
      dispatch({ type: MENU_PAYMENT, payload });
    },
    doItemsMenuNoActive: payload => {
      dispatch({ type: MENU_ALL, payload });
    },
    doAddBtnActive: payload => {
      dispatch({ type: ADD_BTN_PRESS, payload });
    }
  })
)(PaymentSelection);
