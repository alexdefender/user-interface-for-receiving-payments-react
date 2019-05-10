import React from "react";
import "./style.scss";
import { GoodsItems  } from "./GoodsItems";
import { TotalCostGoods } from "./TotalCostGoods";

function ShoppingCart() {
  return (
    <div className="cart-shopping">
      <div className="cart-shopping__title-wrapper">
        <div className="cart-shopping__title">Shopping Cart</div>
        <div className="cart-item__count">2</div>
      </div>
      <GoodsItems />
      <TotalCostGoods />
    </div>
  );
}

export default ShoppingCart;
