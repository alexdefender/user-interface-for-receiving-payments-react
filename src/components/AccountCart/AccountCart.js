import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { EDIT_ACCOUNT, DEL_ACCOUNT, ADD_BTN_PRESS } from "../../variables";

const PAY_PAL = "PayPal";

class AccountCart extends Component {
  editAccount = e => {
    const idAccount = +e.target.id.substring(4);
    const user = this.props.appState.accounts.filter(
      account => account.id === idAccount
    );

    this.props.editAccount(user[0]);
    this.props.doAddBtnActive(true);
  };

  deleteAccount = e => {
    const idAccount = +e.target.id.substring(3);
    this.props.deleteAccount(idAccount);
  };

  render() {
    return this.props.appState.accounts.map(account => {
      const {
        name,
        paymentMethod,
        email,
        cardNumber,
        issuingBank,
        id
      } = account;

      return (
        <div key={id} className="cart-account__wrapper">
          <input
            type="radio"
            id={`radio${id}`}
            name="cart-account"
            className="radio"
          />
          <label htmlFor={`radio${id}`} />
          <div className="cart-account-props">
            <div>
              <div>$</div>
              <div>
                <p>{name}</p>
                <p>{paymentMethod}</p>
              </div>
            </div>
            <p>Account No.: {paymentMethod === PAY_PAL ? email : cardNumber}</p>
            <p>Issuing bank: {issuingBank}</p>
          </div>

          <input type="checkbox" id={`checkbox${id}`} />
          <label htmlFor={`checkbox${id}`}>
            <i className="fas fa-ellipsis-v" />
          </label>
          <div className="cart-account-options">
            <p id={`edit${id}`} onClick={this.editAccount}>
              Edit
            </p>
            <p id={`del${id}`} onClick={this.deleteAccount}>
              Delete
            </p>
          </div>
        </div>
      );
    });
  }
}

export default connect(
  state => ({
    appState: state
  }),
  dispatch => ({
    editAccount: payload => {
      dispatch({ type: EDIT_ACCOUNT, payload });
    },
    deleteAccount: payload => {
      dispatch({ type: DEL_ACCOUNT, payload });
    },
    doAddBtnActive: payload => {
      dispatch({ type: ADD_BTN_PRESS, payload });
    }
  })
)(AccountCart);
