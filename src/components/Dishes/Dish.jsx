import { DishItem } from "./Dish.styled";
import {
  DishImage,
  DishTitle,
  Ingredients,
  DishPrice,
  ToBasket,
} from "./DishComponents";


export const Dish = ({ item } = {}) => {
  const addToOrder = () => {
    console.log(item);
  };

  return (
    <DishItem>
      <DishImage name={item.image} />
      <DishTitle name={item.name} />
      <Ingredients ingredients={item.ingredients} />
      <DishPrice price={item.price} />
      <ToBasket onClick={addToOrder} /> 
    </DishItem>
  );
};
