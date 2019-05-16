import React from "react";
import "./style.scss";
import { connect } from "react-redux";

const GoodsItem = props => {
  return props.appState.goodsItems.map((item, i) => {
    const { img, collection, brand, price } = item;

    return (
      <div key={i} className="cart-item-wrapper">
        <img className="cart-item__img" src={img} />
        <div className="cart-item__desc">
          <p>{collection}</p>
          <p>{brand}</p>
          <p>$ {price}</p>
        </div>
      </div>
    );
  });
};

export default connect(state => ({
  appState: state
}))(GoodsItem);
