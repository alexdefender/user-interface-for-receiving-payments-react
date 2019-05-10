import React, { Component } from "react";
import "./style.scss";
import { HashRouter as Router, Route } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";
import { AccountCart } from "../AccountCart";
import { NavCart } from "../NavCart";
import { PaymentSelection } from "../PaymentSelection";

class App extends Component {
  render() {
    return (
      <Router>
        <form className="cart-wrapper" method="POST">
          <div className="cart-account-wrapper">
            <NavCart />
            <Route exact path="/" component={AccountCart} />
            <Route path="/payment" component={PaymentSelection} />
          </div>
          <ShoppingCart />
        </form>
      </Router>
    );
  }
}

export default App;
