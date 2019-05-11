import React from "react";
import "./style.scss";
import item_001 from "../../img/item-001.jpg";

const GoodsItem = () => (
  <div className="cart-item-wrapper">
    <img className="cart-item__img" src={item_001} />
    <div className="cart-item__desc">
      <p>Glith</p>
      <p>Christian Louboutin</p>
      <p>$ 200.00</p>
    </div>
  </div>
);

export default GoodsItem;
