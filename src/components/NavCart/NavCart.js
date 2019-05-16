import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavCart = props => {
  const { accountsMenu, paymentsMenu } = props.appState.activeItemMenu;

  return (
    <div className="cart-nav-wrapper">
      <nav>
        <ul className="cart-nav-items">
          <li
            className={
              accountsMenu === true
                ? `cart-nav__item cart-nav__item-active`
                : `cart-nav__item`
            }
          >
            <Link to="/">01 CUSTOMER ACCOUNT</Link>
          </li>
          <li
            className={
              paymentsMenu === true
                ? `cart-nav__item cart-nav__item-active`
                : `cart-nav__item`
            }
          >
            <Link to="/payment">02 PAYMENT SELECTION</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default connect(state => ({
  appState: state
}))(NavCart);
