import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const NavCart = () => (
  <div className="cart-nav-wrapper">
    <nav>
      <ul className="cart-nav-items">
        <li className="cart-nav__item">
          <Link to="/">01 CUSTOMER ACCOUNT</Link>
        </li>
        <li className="cart-nav__item no-active" >
          <Link to="/payment">02 PAYMENT SELECTION</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavCart;
