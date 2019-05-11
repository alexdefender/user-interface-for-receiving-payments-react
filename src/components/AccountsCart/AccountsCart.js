import React from "react";
import "./style.scss";
import { AccountCart } from "../AccountCart";

const AccountsCart = () => (
  <div>
    <h2 className="cart-accounts__title">Customer Account</h2>
    <div className="cart-accounts">
      <AccountCart />
      <button className="cart-account__add-btn">
        <i className="fas fa-plus" />
      </button>
    </div>
  </div>
);

export default AccountsCart;
