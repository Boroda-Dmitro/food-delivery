import {
  Image,
  Title,
  IngredientsList,
  Price,
  PriceSymbol,
  BasketButton,
} from "./Dish.styled";
import { BsBasket } from "react-icons/bs";

export const DishImage = ({ name }) => {
  return (
    <Image
      src={`https://res.cloudinary.com/dt8h4kxqx/image/upload/v1702459321/pizzas/pizza/${name}.jpg`}
      alt="name"
    />
  );
};

export const DishTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

export const Ingredients = ({ ingredients = [] }) => {
  return <IngredientsList>Склад: {ingredients.join(", ")}</IngredientsList>;
};

export const DishPrice = ({ price }) => {
  return (
    <Price>
      {price} <PriceSymbol>₴</PriceSymbol>
    </Price>
  );
};

export const ToBasket = ({ onClick }) => {
  return (
    <BasketButton onClick={onClick}>
      Хочу <BsBasket />
    </BasketButton>
  );
};
