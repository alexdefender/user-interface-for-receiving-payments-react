import React from "react";
import "./style.scss";

const AccountCart = () => (
  <div className="cart-account__wrapper">
    <input type="radio" id="radio1" name="cart-account" className="radio"/>
    <label htmlFor="radio1" />
    <div className="cart-account-props">
      <div>
        <div>$</div>
        <div>
          <p>Kusturica d.i.o.</p>
          <p>Wire Transfer</p>
        </div>
      </div>
      <p>Account No.: paypal@kusturica.cz</p>
      <p>Issuing bank: PayPal</p>
    </div>
    <input type="checkbox" id="checkbox1" />
    <label htmlFor="checkbox1">
      <i className="fas fa-ellipsis-v" />
    </label>
    <div className="cart-account-options">
      <p>Edit</p>
      <p>Delete</p>
    </div>
  </div>
);

export default AccountCart;
