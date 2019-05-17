import imgItem01 from "../img/item-001.jpg";
import imgItem02 from "../img/item-002.jpg";

const initialState = [
  {
    img: imgItem01,
    collection: "Glith",
    brand: "Christian Louboutin",
    price: 200
  },
  {
    img: imgItem02,
    collection: "Bianca",
    brand: "Christian Louboutin",
    price: 200
  }
];

const goodsItems = (state = initialState, action) => {
  return state;
};

export default goodsItems;
