import React from "react";
import "./style.scss";
import logoPaypal from "../../img/paypal-logo.png";
import logoVisaMastercard from "../../img/visa-and-mastercard-logos.png";

const PaymentSelection = () => (
  <div>
    <h2 className="payment-selection__title">Payment Selection</h2>
    <div className="payment-items">
      <div className="payment-item">
        <input
          type="radio"
          id="payment-paypal"
          name="payment"
          className="radio"
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
        />
        <label htmlFor="payment-balance">
            <span>Balance</span>
        </label>
      </div>
    </div>
  </div>
);

export default PaymentSelection;
