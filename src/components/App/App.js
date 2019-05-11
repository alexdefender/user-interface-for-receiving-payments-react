import React, { Component } from "react";
import "./style.scss";
import { HashRouter as Router, Route } from "react-router-dom";
import { ShoppingCart } from "../ShoppingCart";
import { AccountsCart } from "../AccountsCart";
import { NavCart } from "../NavCart";
import { PaymentSelection } from "../PaymentSelection";

class App extends Component {
  render() {
    return (
      <Router>
        <form className="cart-wrapper" method="POST">
          <div className="cart-accounts-wrapper">
            <NavCart />
            <Route exact path="/" component={AccountsCart} />
            <Route path="/payment" component={PaymentSelection} />
          </div>
          <ShoppingCart />
          {/*<AddAccountCart />*/}
        </form>
      </Router>
    );
  }
}

export default App;
