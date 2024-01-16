import {
  Image,
  Title,
  Price,
  PriceSymbol,
  BasketButton,
} from "./Basket.styled";
import { MdOutlineDeleteForever } from "react-icons/md";

export const BasketItemImage = ({ name }) => {
  return (
    <Image
      src={`https://res.cloudinary.com/dt8h4kxqx/image/upload/v1702459321/pizzas/pizza/${name}.jpg`}
      alt="name"
    />
  );
};

export const BasketItemTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

export const BasketItemPrice = ({ price, number = 1 }) => {
  return (
    <Price>
      {price * number} <PriceSymbol>₴</PriceSymbol>
    </Price>
  );
};

export const RemoveFromBasket = ({ onClick }) => {
  return (
    <BasketButton onClick={onClick}>
      <MdOutlineDeleteForever />
    </BasketButton>
  );
};

export const Number = ({ number, addOne, removeOne }) => {
  return (
    <>
      <button onClick={removeOne} disabled={number === 1}>
        -
      </button>
      {number}
      <button onClick={addOne}>+</button>
    </>
  );
};
