import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { SUBTOTAL } from "../../variables";

class TotalCostGoods extends Component {
  componentDidUpdate() {
    this.props.addPrice(this.subtotal);
  }

  render() {
    this.subtotal = this.props.appState.goodsItems
      .map(item => item.price)
      .reduce((sum, current) => {
        return sum + current;
      });

    const { commission, vat, totalPrice } = this.props.appState.totalCostGoods;

    return (
      <div className="cart-total-wrapper">
        <div className="cart-total">
          <p>Subtotal</p>
          <p>$ {this.subtotal.toFixed(2)}</p>
        </div>
        <div className="cart-total">
          <p>Payment processing services 1%</p>
          <p>$ {commission.toFixed(2)}</p>
        </div>
        <div className="cart-total">
          <p>VAT 21%</p>
          <p>$ {vat.toFixed(2)}</p>
        </div>
        <div className="cart-total">
          <p>Total</p>
          <p>
            ${" "}
            {totalPrice !== 0
              ? totalPrice.toFixed(2)
              : this.subtotal.toFixed(2)}
          </p>
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
    addPrice: payload => {
      dispatch({ type: SUBTOTAL, payload });
    }
  })
)(TotalCostGoods);
