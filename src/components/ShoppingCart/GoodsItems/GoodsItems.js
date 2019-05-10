import React from "react";
import "./style.scss";
import { GoodsItem } from "../GoodsItem";

const GoodsItems = () => (
  <div className="cart-items">
    <GoodsItem />
    <GoodsItem />
    <GoodsItem />
  </div>
);

export default GoodsItems;
