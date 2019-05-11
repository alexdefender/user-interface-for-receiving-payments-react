import React from "react";
import "./style.scss";

const AddAccountCart = () => (
  <div className="add-cart-account-wrapper">
      <h2 className="add-cart-account__title">Add Customer Account<span><i className="fas fa-times"></i></span></h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
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
        title="Write your name and surname"
        pattern="^[a-zA-Z ]+$"
        minLength="2"
        required
      />
    </div>

    <div className="add-cart-account-input">
      <label className="add-account-label" htmlFor="address">
        Address *
      </label>
      <input
        type="text"
        id="address"
        className="add-account-input"
        name="address"
        title="Write your address"
        pattern="^[a-zA-Z0-9 ]+$"
        minLength="2"
        required
      />
    </div>

    <div className="add-payment-wrapper">
      <label htmlFor="add-account-label">Payment method *</label>
      <div className="add-account-select-wrapper">
        <select
          name="payment"
          id="payment-select"
          className="add-account-select"
          required
        >
          <option value="credit-card">Credit Card</option>
          <option value="credit-card">Credit Card</option>
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
          placeholder="0000 0000 0000 0000"
          pattern="^[0-9-]+$"
          minLength="16"
          maxLength="19"
          required
        />
      </div>
      <div className="add-cart-account-input add-account-data">
        <label className="add-account-label" htmlFor="card-number">
          Expiry date *
        </label>
        <input
          type="date"
          id="cart-date"
          className="add-account-input add-account-input-date"
          name="date"
          title="Write expiry date"
          minLength="10"
          required
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
          placeholder="000"
          pattern="^[0-9]+$"
          minLength="3"
          maxLength="3"
          required
        />
      </div>
    </div>

    <div className="add-cart-account-btn">
      <button>CANCEL</button>
      <button>SAVE</button>
    </div>
  </div>
);

export default AddAccountCart;
