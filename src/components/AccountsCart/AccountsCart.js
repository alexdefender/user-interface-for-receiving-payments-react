import React, { Component, Fragment } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AccountCart } from "../AccountCart";
import { AddAccountCart } from "../AddAccountCart";
import { connect } from "react-redux";
import { ADD_BTN_PRESS, MENU_ACCOUNTS, MENU_ALL } from "../../variables";

class AccountsCart extends Component {
  componentDidMount() {
    this.props.doItemsMenuNoActive(false);
    this.props.doItemMenuActive(true);
  }

  addAccount = () => {
    this.props.doAddBtnActive(true);
  };

  render() {
    return (
      <Fragment>
        <h2 className="cart-accounts__title">Customer Account</h2>
        <div className="cart-accounts">
          <AccountCart />
          <button
            className="cart-account__add-btn"
            type="button"
            onClick={this.addAccount}
          >
            <i className="fas fa-plus" />
          </button>
          {this.props.appState.addBtnPress ? <AddAccountCart /> : ""}
        </div>
        <div className="cart-accounts-nav">
          <div className="cart-accounts__back">
            <Link to="/">
              <i className="fas fa-arrow-left" /> Return to Shop
            </Link>
          </div>
          <div className="cart-accounts__next">
            <Link to="/payment">CONTINUE TO PAYMENT</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({
    doAddBtnActive: payload => {
      dispatch({ type: ADD_BTN_PRESS, payload });
    },
    doItemMenuActive: payload => {
      dispatch({ type: MENU_ACCOUNTS, payload });
    },
    doItemsMenuNoActive: payload => {
      dispatch({ type: MENU_ALL, payload });
    }
  })
)(AccountsCart);
