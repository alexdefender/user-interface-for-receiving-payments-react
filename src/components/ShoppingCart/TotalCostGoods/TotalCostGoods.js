import React from "react";
import "./style.scss";

const TotalCostGoods = () => (
  <div className="cart-total-wrapper">
    <div className="cart-total">
      <p>Subtotal</p>
      <p>$ 400.00</p>
    </div>
    <div className="cart-total">
      <p>Payment processing services 1%</p>
      <p>$ 4.00</p>
    </div>
    <div className="cart-total">
      <p>VAT</p>
      <p>$ 84.84</p>
    </div>
    <div className="cart-total">
      <p>Total</p>
      <p>$ 488.84</p>
    </div>
  </div>
);

export default TotalCostGoods;
