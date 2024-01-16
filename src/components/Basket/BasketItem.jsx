import { basketSlice } from "../../Redux/Basket/Slise";

import { useDispatch } from "react-redux";
import { BasketItemBox } from "./Basket.styled";

import {
  BasketItemImage,
  BasketItemTitle,
  BasketItemPrice,
  RemoveFromBasket,
  Number,
} from "./BasketComponents";

export const BasketItem = ({ item } = {}) => {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(basketSlice.actions.deleteDish(item));
  };

  const addOneDish = () => {
    dispatch(basketSlice.actions.addOne(item))
  }
  const removeOneDish = () => {
    dispatch(basketSlice.actions.removeOne(item));
  }

  return (
    <BasketItemBox>
      <BasketItemImage name={item.image} />
      <BasketItemTitle name={item.name} />
      <Number
        number={item.number}
        addOne={addOneDish}
        removeOne={removeOneDish}
      />
      <BasketItemPrice price={item.price} number={item.number} />
      <RemoveFromBasket onClick={removeFromBasket} />
    </BasketItemBox>
  );
};
