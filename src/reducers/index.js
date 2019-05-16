import { combineReducers } from "redux";
import accounts from "./accounts";
import addBtnPress from "./addBtnPress";
import goodsItems from "./goodsItems";
import totalCostGoods from "./totalCostGoods";
import activeItemMenu from "./activeItemMenu";
import editAccount from "./editAccount";

export default combineReducers({
  accounts,
  addBtnPress,
  goodsItems,
  totalCostGoods,
  activeItemMenu,
  editAccount
});
