import { useDispatch, useSelector } from "react-redux";
import { DishItem } from "./Dish.styled";
import {
  DishImage,
  DishTitle,
  Ingredients,
  DishPrice,
  ToBasket,
  RemoveFromBasket,
} from "./DishComponents";
import { basketSlice } from "../../Redux/Basket/Slise";

export const Dish = ({ item } = {}) => {
  const dispatch = useDispatch();
  const basketState = useSelector((state) => state.basket);
  const addToBasket = () => {
    const addThisDish = { number: 1, ...item};
    dispatch(basketSlice.actions.addDish(addThisDish));
  };
  const removeDishFromBasket = () => {
    dispatch(basketSlice.actions.deleteDish(item))
  } 

  return (
    <DishItem>
      <DishImage name={item.image} />
      <DishTitle name={item.name} />
      <Ingredients ingredients={item.ingredients} />
      <DishPrice price={item.price} />
      {basketState.find((dish) => dish._id === item._id) ? (
        <RemoveFromBasket onClick={removeDishFromBasket} />
        ) : (
        <ToBasket onClick={addToBasket} />
      )}
    </DishItem>
  );
};
