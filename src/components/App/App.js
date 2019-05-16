import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./style.scss";
import { ShoppingCart } from "../ShoppingCart";
import { AccountsCart } from "../AccountsCart";
import { NavCart } from "../NavCart";
import { PaymentSelection } from "../PaymentSelection";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="cart-wrapper">
          <div className="cart-accounts-wrapper">
            <NavCart />
            <Route exact path="/" component={AccountsCart} />
            <Route path="/payment" component={PaymentSelection} />
          </div>
          <ShoppingCart />
        </div>
      </Router>
    );
  }
}

export default connect(state => ({
  appState: state
}))(App);
